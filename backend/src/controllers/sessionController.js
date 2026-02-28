import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty, interviewType } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty || !interviewType) {
      return res.status(400).json({ message: "Problem, difficulty, and interview type are required" });
    }

    // generate a unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // generate unique 6-digit join code
    const joinCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Ensure user exists in Stream
    await chatClient.upsertUser({
      id: clerkId,
      name: req.user.name,
      image: req.user.profileImage,
      role: 'user',
    });

    // create session in db
    const session = await Session.create({ problem, difficulty, interviewType, host: userId, callId, joinCode });

    // create stream video call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, interviewType, sessionId: session._id.toString() },
      },
    });

    // chat messaging
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    res.status(201).json({ session });
  } catch (error) {
    console.log("Error in createSession controller:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
}

// Removed getActiveSessions for privacy - use join code instead

export async function joinSessionByCode(req, res) {
  try {
    const { joinCode } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!joinCode) {
      return res.status(400).json({ message: "Join code is required" });
    }

    const session = await Session.findOne({ joinCode: joinCode.toUpperCase(), status: "active" });

    if (!session) {
      return res.status(404).json({ message: "Invalid join code or session has ended" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "You are the host of this session" });
    }

    if (session.participant) {
      return res.status(409).json({ message: "Session already has a participant" });
    }

    // Ensure participant user exists in Stream
    await chatClient.upsertUser({
      id: clerkId,
      name: req.user.name,
      image: req.user.profileImage,
      role: 'user',
    });

    session.participant = userId;
    await session.save();

    // Add user to chat channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    await session.populate("host", "name profileImage email clerkId");
    await session.populate("participant", "name profileImage email clerkId");

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSessionByCode controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant (both active and completed)
    const sessions = await Session.find({
      $or: [{ host: userId }, { participant: userId }],
    })
      .select('problem difficulty interviewType status createdAt updatedAt participant host') // Only select needed fields
      .lean() // Convert to plain JavaScript objects for better performance
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join their own session as participant" });
    }

    // check if session is already full - has a participant
    if (session.participant) return res.status(409).json({ message: "Session is full" });

    // Ensure participant user exists in Stream
    await chatClient.upsertUser({
      id: clerkId,
      name: req.user.name,
      image: req.user.profileImage,
      role: 'user',
    });

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    // check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // delete stream video call
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    // delete stream chat channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
