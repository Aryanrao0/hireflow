import { Webhook } from "svix";
import { clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

// Sync current user from Clerk to MongoDB (temporary solution)
export async function syncCurrentUser(req, res) {
  try {
    const clerkId = req.auth()?.userId;

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if user already exists
    let user = await User.findOne({ clerkId });

    if (user) {
      return res.status(200).json({ message: "User already exists", user });
    }

    // Fetch user from Clerk
    const clerkUser = await clerkClient.users.getUser(clerkId);

    // Create user in MongoDB
    user = await User.create({
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      profileImage: clerkUser.imageUrl,
      name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
    });

    console.log("✅ User synced to database:", user.email);

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log("Error in syncCurrentUser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function clerkWebhook(req, res) {
  try {
    const WEBHOOK_SECRET = ENV.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      throw new Error("Please add CLERK_WEBHOOK_SECRET to .env");
    }

    // Get the headers
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return res.status(400).json({ error: "Missing svix headers" });
    }

    // Get the body
    const payload = req.body;

    // Create a new Svix instance with your webhook secret
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;

    // Verify the webhook
    try {
      evt = wh.verify(JSON.stringify(payload), {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.log("Error verifying webhook:", err);
      return res.status(400).json({ error: "Error verifying webhook" });
    }

    // Handle the webhook
    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, email_addresses, image_url, first_name, last_name } = evt.data;

      // Check if user already exists
      const existingUser = await User.findOne({ clerkId: id });

      if (!existingUser) {
        await User.create({
          clerkId: id,
          email: email_addresses[0].email_address,
          profileImage: image_url,
          name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
        });

        console.log("✅ User created in database:", email_addresses[0].email_address);
      }
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, image_url, first_name, last_name } = evt.data;

      await User.findOneAndUpdate(
        { clerkId: id },
        {
          email: email_addresses[0].email_address,
          profileImage: image_url,
          name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
        }
      );

      console.log("✅ User updated in database:", email_addresses[0].email_address);
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;

      await User.findOneAndDelete({ clerkId: id });

      console.log("✅ User deleted from database:", id);
    }

    res.status(200).json({ message: "Webhook received" });
  } catch (error) {
    console.log("Error in clerkWebhook:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
