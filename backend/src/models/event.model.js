import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    primaryHostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    coHostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    splitPercentage: {
      type: Number,
      required: true, // e.g., 60 for a 60/40 split
      min: 1,
      max: 99,
    },
    endDate: {
      type: Date,
      required: true,
    },
    escrowStatus: {
      type: String,
      enum: ["ESCROW_HELD", "RELEASED"],
      default: "ESCROW_HELD",
    },
    collaborationStatus: {
      type: String,
      enum: ["PENDING_PARTNER", "APPROVED"],
      default: "PENDING_PARTNER",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
