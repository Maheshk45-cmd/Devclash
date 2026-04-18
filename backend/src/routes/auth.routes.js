import { Router } from "express";
import { signup, login, verifyDigilocker, verifyFace } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected Auth/Identity routes
router.post("/verify-digilocker", verifyToken, verifyDigilocker);
router.post("/verify-face", verifyToken, verifyFace);

export default router;
