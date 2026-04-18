import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // Check for token in cookies first, fallback to Authorization header
  const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const secret = process.env.JWT_SECRET || "default_fallback_secret_123";
    const decoded = jwt.verify(token, secret);
    
    // Attach decoded token payload (containing user id and role) to req.user
    req.user = decoded;
    
     next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token." });
  }
};

export const requireVerifiedUser = (req, res, next) => {
  // First ensure the user exists via verifyToken logic (which attaches req.user)
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized. Token verification required." });
  }

  if (req.user.verification_status !== "VERIFIED") {
    return res.status(403).json({ error: "Access denied. User verification is pending." });
  }

  next();
};
