import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);
export default Company;
