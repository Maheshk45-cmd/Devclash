import express from "express";

const app = express();

app.use(express.json());

import eventRoutes from "./routes/event.routes.js";
import { startEscrowEngine } from "./jobs/escrowPayout.job.js";

// Initialize Escrow Payout Engine
startEscrowEngine();

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀. Escrow engine active.");
});

// Mount Routes
app.use("/api/events", eventRoutes);


export default app;