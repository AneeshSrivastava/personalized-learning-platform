import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  topics: [{ type: String }],
  progress: [{ topic: String, hoursSpent: Number }],
});


export const userModel = mongoose.model("User", userSchema);