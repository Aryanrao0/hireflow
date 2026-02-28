import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env for local development; on Vercel, env vars are injected automatically
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const ENV = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_URL: process.env.CLIENT_URL,
  PRODUCTION_URL: process.env.PRODUCTION_URL,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
};
