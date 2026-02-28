import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import authRoutes from "./routes/authRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";
import { clerkWebhook } from "./controllers/authcontroller.js";

const app = express();

const __dirname = path.resolve();

// middleware - updated
// CORS must be first to handle preflight requests
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  ENV.CLIENT_URL,
  process.env.PRODUCTION_URL,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, curl)
    if (!origin) return callback(null, true);

    // Check if origin is in allowed list or matches pattern
    if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app') || origin.endsWith('.netlify.app')) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all origins for now, restrict in production
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());

// Health check before auth
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

// Auth routes - webhook needs raw body middleware
app.post("/api/auth/webhook", express.raw({ type: "application/json" }), clerkWebhook);

// Other auth routes (like /sync)
app.use("/api/auth", authRoutes);

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/code", codeRoutes);

console.log("✅ Routes registered:");
console.log("   POST /api/auth/webhook (Clerk webhook)");
console.log("   POST /api/auth/sync (User sync)");
console.log("   GET  /api/sessions/my-recent");
console.log("   POST /api/sessions");
console.log("   POST /api/code/execute");
console.log("   GET  /api/chat/token");

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "HireFlow API Server",
    status: "running",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      auth: "/api/auth",
      sessions: "/api/sessions",
      chat: "/api/chat"
    }
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    message: "Route not found",
    path: req.path,
    method: req.method
  });
});

const startServer = async () => {
  try {
    await connectDB();
    if (process.env.NODE_ENV !== "production") {
      app.listen(ENV.PORT || 3000, () => console.log("Server is running on port:", ENV.PORT || 3000));
    }
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();

export default app;
