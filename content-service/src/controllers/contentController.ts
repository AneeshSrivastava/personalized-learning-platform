import { Request, Response } from "express";
import { ContentModel } from "../models/Content";

export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = new ContentModel(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ message: "Error creating content", error });
  }
};

export const getAllContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contents = await ContentModel.find();
    res.status(200).json(contents);
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

export const updateContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await ContentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!content) res.status(404).json({ message: "Content not found" });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "Error updating content", error });
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
