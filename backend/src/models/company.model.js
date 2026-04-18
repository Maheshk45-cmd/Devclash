import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cin: {
      type: String,
      required: true,
      unique: true, // Corporate Identification Number
    },
    directors: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
      }
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
