import express from "express";
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

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  ENV.CLIENT_URL,
  ENV.PRODUCTION_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, curl)
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".netlify.app")
      ) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all origins for now
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.use(express.json());

// Health check (before auth)
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// Ensure DB is connected on every request (critical for serverless cold starts)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.use(clerkMiddleware());

// Auth routes
app.post(
  "/api/auth/webhook",
  express.raw({ type: "application/json" }),
  clerkWebhook
);
app.use("/api/auth", authRoutes);

// Inngest
app.use("/api/inngest", serve({ client: inngest, functions }));

// API routes
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/code", codeRoutes);

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
      chat: "/api/chat",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
    path: req.path,
    method: req.method,
  });
});

// Local dev server (Vercel uses the exported app directly)
if (ENV.NODE_ENV !== "production") {
  const startServer = async () => {
    try {
      await connectDB();
      app.listen(ENV.PORT, () =>
        console.log("Server is running on port:", ENV.PORT)
      );
    } catch (error) {
      console.error("💥 Error starting the server", error);
    }
  };
  startServer();
}

// Export for Vercel serverless
export default app;
