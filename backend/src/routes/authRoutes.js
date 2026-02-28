import express from "express";
import { clerkWebhook, syncCurrentUser } from "../controllers/authcontroller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/webhook", clerkWebhook);
router.post("/sync", protectRoute, syncCurrentUser);

export default router;
