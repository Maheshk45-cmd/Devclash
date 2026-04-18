import Event from "../models/event.model.js";
import Company from "../models/company.model.js";

// Create Collab Event
export const createEvent = async (req, res) => {
  try {
    const { title, coHostId, splitPercentage, endDate } = req.body;

    if (!req.user.companyId) {
      return res.status(403).json({ error: "You must belong to a company to host events." });
    }

    // Strongly validate Co-Host integration
    const coHost = await Company.findById(coHostId);
    if (!coHost) {
      return res.status(404).json({ error: "Invalid co-host company. Registration missing." });
    }

    if (splitPercentage < 1 || splitPercentage > 99) {
      return res.status(400).json({ error: "Invalid split percentage." });
    }

    const event = await Event.create({
      title,
      primaryHostId: req.user.companyId,
      coHostId,
      splitPercentage,
      endDate: new Date(endDate),
      escrowStatus: "ESCROW_HELD",
      collaborationStatus: "PENDING_PARTNER"
    });

    res.status(201).json({ message: "Collab event created. Awaiting partner approval.", event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Accept Collab
export const acceptCollab = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find event
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found." });

    // Validate if the user's company is the intended coHost
    if (String(event.coHostId) !== String(req.user.companyId)) {
      return res.status(403).json({ error: "Only the designated Co-Host company can accept." });
    }

    if (event.collaborationStatus !== "PENDING_PARTNER") {
      return res.status(400).json({ error: "Collaboration is already approved." });
    }

    event.collaborationStatus = "APPROVED";
    await event.save();

    res.status(200).json({ message: "Collaboration accepted.", event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
