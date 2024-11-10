import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    topics: [{ tag: String, level: String }],
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
