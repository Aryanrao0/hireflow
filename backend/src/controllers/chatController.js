import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    // use clerkId for Stream (not mongodb _id)=> it should match the id we have in the stream dashboard
    const userId = req.user.clerkId;
    const userName = req.user.name;
    const userImage = req.user.profileImage;

    // Upsert user in Stream to ensure they exist
    await chatClient.upsertUser({
      id: userId,
      name: userName,
      image: userImage,
      role: 'user',
    });

    const token = chatClient.createToken(userId);

    res.status(200).json({
      token,
      userId,
      userName,
      userImage,
    });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
