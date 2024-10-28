import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    topics: [
      {
        topicId: { type: String, required: true },
        topicTitle: { type: String, required: true },
        duration: { type: Number, required: true },
        content: { type: String, required: true },
      },
    ],
    category: { type: String, required: true },
    level: { type: String, required: true },
    tags: [{ type: String }],
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const ContentModel = mongoose.model("Content", contentSchema);
