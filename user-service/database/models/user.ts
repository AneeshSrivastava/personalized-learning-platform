import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    completedTopics: [{ type: String }],
    progress: [
      {
        topicId: { type: String, required: true },
        currentTopic: { type: String },
        completedPercentage: { type: Number, default: 0 },
        lastAccessed: { type: Date, default: Date.now },
      },
    ],
    level: { type: String, required: true, default: "beginner" },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
