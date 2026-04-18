import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Mock Signup
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await User.create({ email, password });
    
    // In a real scenario, we'd send an OTP. MOCK:
    res.status(201).json({
      message: "OTP sent to email successfully (MOCK). User mapped.",
      userId: newUser._id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mock Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const payload = {
      id: user._id,
      role: user.role,
      companyId: user.companyId,
    };

    const secret = process.env.JWT_SECRET || "default_fallback_secret_123";
    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Mock Digilocker
export const verifyDigilocker = async (req, res) => {
  try {
    const { digilockerToken } = req.body;
    if (!digilockerToken) return res.status(400).json({ error: "Token required" });

    // Mock extraction
    const mockExtractedName = "Verified Name";

    const user = await User.findByIdAndUpdate(
      req.user.id, 
      { legalName: mockExtractedName },
      { new: true }
    );

    res.status(200).json({ message: "Digilocker verification successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mock Face Verification
export const verifyFace = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { isFaceVerified: true },
      { new: true }
    );

    res.status(200).json({ message: "Face verification successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
