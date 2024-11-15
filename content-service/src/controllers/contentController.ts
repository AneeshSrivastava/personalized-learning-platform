import { Request, Response } from "express";
import { ContentModel } from "../models/Content";

export const getAllContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // If request has a body payload like "topic" then return content by topic
    // const contents = await ContentModel.find({ tags: req.body.topic });
    const contents = await ContentModel.aggregate([{ $sample: { size: 10 } }]);
    // Get top 10 rows in ContentModel

    res.status(200).json(contents);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching content", error });
  }
};

export const getContentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await ContentModel.findById(req.params.id);
    if (!content) res.status(404).json({ message: "Content not found" });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "Error fetching content", error });
  }
};

export const deleteContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await ContentModel.findByIdAndDelete(req.params.id);
    if (!content) res.status(404).json({ message: "Content not found" });
    res.status(200).json({ message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting content", error });
  }
};
