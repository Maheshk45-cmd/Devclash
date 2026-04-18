import { Router } from "express";
import { createEvent, acceptCollab } from "../controllers/event.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.use(verifyToken);

// Primary Host (Any Admin or Owner can create an event proposal)
router.post("/create", roleMiddleware(["OWNER", "ADMIN"]), createEvent);

// Co-Host Accepts
router.post("/:id/accept", roleMiddleware(["OWNER", "ADMIN"]), acceptCollab);

export default router;
