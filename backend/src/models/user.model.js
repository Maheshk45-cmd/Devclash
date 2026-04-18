import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['ATTENDEE', 'ADMIN', 'OWNER'], default: 'ATTENDEE' },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' } // If applicable
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
