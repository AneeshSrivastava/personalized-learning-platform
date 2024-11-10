import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },
    tags: [{ type: String }],
    summary: { type: String },
    level: { type: String },
    topic: { type: String },
  },
  { timestamps: true }
);

export const ContentModel = mongoose.model("Content", contentSchema);
