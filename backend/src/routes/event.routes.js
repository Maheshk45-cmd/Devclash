import express from "express";
import {
  createEvent,
  acceptCollab,
  cancelEvent,
  registerForEvent,
  reportEvent,
} from "../controllers/event.controller.js";
import { roleMiddleware, requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

// --- Host/Company Actions ---
// Only Admin/Owners can create or cancel their events
router.post("/create", roleMiddleware(["ADMIN", "OWNER"]), createEvent);

// Only Admin/Owners can accept an incoming collaboration
router.post("/:id/accept-collab", roleMiddleware(["ADMIN", "OWNER"]), acceptCollab);

// Cancel event and loop refunds
router.post("/:id/cancel", roleMiddleware(["ADMIN", "OWNER"]), cancelEvent);


// --- Attendee Actions ---
// Any authenticated user can register or report an event (mocked using requireAuth)
router.post("/:id/register", requireAuth, registerForEvent);
router.post("/:id/report", requireAuth, reportEvent);

export default router;
