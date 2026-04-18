import express from "express";
import cookieParser from "cookie-parser";

// Central Routing imports
import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/company.routes.js";
import jobRoutes from "./routes/job.routes.js";
import eventRoutes from "./routes/event.routes.js";

// Cron Setup
import { setupCronJobs } from "./cron/cron.setup.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

// Initialize background chron jobs
setupCronJobs();

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Mount Routes Base paths
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/events", eventRoutes);

export default app;