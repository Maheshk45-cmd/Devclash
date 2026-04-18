import Company from "../models/company.model.js";
import User from "../models/user.model.js";
import { logActivity } from "../services/activity.service.js";

// Mock Owner Claim (Biometric Triangulation Equivalent)
export const claimOwner = async (req, res) => {
  try {
    const { cin, din, companyName, domain, mcaEmail } = req.body;

    // Check domain anti-spoofing explicitly
    if (domain.split('.')[0].toLowerCase() !== mcaEmail.split('@')[1].split('.')[0].toLowerCase()) {
      return res.status(400).json({ error: "Domain mismatch detected. MCA identity check failed." });
    }
    
    // Fetch the latest user state from the database
    const user = await User.findById(req.user.id);
    
    // Safety check
    if (!user || !user.legalName) {
      return res.status(403).json({ error: "Legal Name from Digilocker missing." });
    }

    // Mock MCA API response
    const mockMcaApi = { directorName: "Verified Name" };

    if (mockMcaApi.directorName.toLowerCase() === user.legalName.toLowerCase()) {
      // Mint new company
      const company = await Company.create({
        name: companyName || "Mock Company",
        domain,
        cin,
        mcaEmail
      });

      // Elevate User
      await User.findByIdAndUpdate(req.user.id, {
        role: "OWNER",
        companyId: company._id
      });

      await logActivity({
        userId: req.user.id,
        companyId: company._id,
        type: "COMPANY_MINTED",
        message: `Company ownership formally established and verified via MCA mock datasets.`
      });

      return res.status(200).json({ message: "Ownership verified successfully.", company });
    } else {
      return res.status(400).json({ error: "MCA Name mismatch. Fraud detected." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Admin Appointment
export const appointAdmin = async (req, res) => {
  try {
    const { employeeUserId } = req.body;

    const employee = await User.findById(employeeUserId);
    if (!employee || String(employee.companyId) !== String(req.user.companyId)) {
      return res.status(404).json({ error: "Employee not found in your company." });
    }

    employee.role = "ADMIN";
    await employee.save();

    await logActivity({
      userId: req.user.id,
      companyId: req.user.companyId,
      type: "ADMIN_PROMOTED",
      message: `An employee was successfully promoted to Admin by Ownership.`
    });

    res.status(200).json({ message: "Employee appointed as Admin", employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Employee Onboarding (Mocked Google OAuth Domain parsing)
export const joinEmployee = async (req, res) => {
  try {
    const { googleEmail } = req.body;
    
    if (!googleEmail || !googleEmail.includes("@")) {
      return res.status(400).json({ error: "Invalid Google Email" });
    }

    // Extract Hosted Domain (`hd`) from email
    const hostedDomain = googleEmail.split("@")[1];

    const company = await Company.findOne({ domain: hostedDomain.toLowerCase() });
    
    if (!company) {
      return res.status(404).json({ error: "No registered company matches this domain." });
    }

    // Link user
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { role: "EMPLOYEE", companyId: company._id },
      { new: true }
    );

    await logActivity({
      userId: req.user.id,
      companyId: company._id,
      type: "EMPLOYEE_JOINED",
      message: `A new employee connected to the company realm seamlessly using a signed Domain extract.`
    });

    res.status(200).json({ message: "Joined company successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Trust Employee for Job Pipeline mapping
export const trustEmployee = async (req, res) => {
  try {
    const { employeeUserId } = req.body;

    const employee = await User.findById(employeeUserId);
    if (!employee || String(employee.companyId) !== String(req.user.companyId)) {
      return res.status(404).json({ error: "Employee not found in your company realm." });
    }

    employee.isTrustedPoster = true;
    await employee.save();

    res.status(200).json({ message: "Employee granted Trusted Poster clearance.", employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
