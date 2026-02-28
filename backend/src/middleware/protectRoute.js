import { requireAuth } from "@clerk/express";
import { clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth({
    onError: (error) => {
      console.error("Clerk auth error:", error);
    }
  }),
  async (req, res, next) => {
    try {
      const clerkId = req.auth()?.userId;

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized - no valid token provided" });
      }

      // find user in db by clerk ID
      let user = await User.findOne({ clerkId });

      // Auto-create user if not found (in case webhook was missed)
      if (!user) {
        try {
          const clerkUser = await clerkClient.users.getUser(clerkId);
          user = await User.create({
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0].emailAddress,
            profileImage: clerkUser.imageUrl,
            name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
          });
          console.log("✅ Auto-created user in database:", user.email);
        } catch (createError) {
          console.error("Failed to auto-create user:", createError);
          return res.status(401).json({ message: "Unable to authenticate user. Please try again." });
        }
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
