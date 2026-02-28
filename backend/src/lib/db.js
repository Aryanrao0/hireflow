import mongoose from "mongoose";
import { ENV } from "./env.js";

// Cache connection for serverless reuse (prevents connection pool exhaustion)
let cachedConnection = null;

export const connectDB = async () => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  if (!ENV.DB_URL) {
    throw new Error("DB_URL is not defined in environment variables");
  }

  try {
    const conn = await mongoose.connect(ENV.DB_URL, {
      maxPoolSize: 10,
    });
    cachedConnection = conn;
    console.log("✅ Connected to MongoDB:", conn.connection.host);
    return conn;
  } catch (error) {
    console.error("❌ Error connecting to MongoDB", error);
    throw error;
  }
};
