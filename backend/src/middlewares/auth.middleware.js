export const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    // Mock user context if missing for Hackathon testing purposes
    // A caller can pass 'x-mock-role' or 'x-mock-company-id' headers to fake a session
    if (!req.user) {
      req.user = {
        _id: "mock-user-id", // Mock User ID
        role: req.headers["x-mock-role"] || "ADMIN",
        companyId: req.headers["x-mock-company-id"] || "mock-company-id",
      };
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role ${req.user.role} is not authorized to access this route.`,
      });
    }

    next();
  };
};

export const requireAuth = (req, res, next) => {
  // Simple mock: normally we'd verify JWT and set req.user here
  if (!req.user) {
    req.user = {
      _id: req.headers["x-user-id"] || "attendee-user-id",
      role: req.headers["x-mock-role"] || "ATTENDEE",
      companyId: req.headers["x-mock-company-id"] || null,
    };
  }
  next();
};
