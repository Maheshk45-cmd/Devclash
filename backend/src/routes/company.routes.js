import { Router } from "express";
import { claimOwner, appointAdmin, joinEmployee, trustEmployee } from "../controllers/company.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.use(verifyToken);

router.post("/claim-owner", claimOwner);
router.post("/join-employee", joinEmployee);

// Admin/Owner endpoint
router.put("/trust-employee", roleMiddleware(["OWNER", "ADMIN"]), trustEmployee);

// Owner-only endpoint
router.post("/appoint-admin", roleMiddleware(["OWNER"]), appointAdmin);

export default router;
