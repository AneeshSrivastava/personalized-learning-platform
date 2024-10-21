import { Request, Response } from "express";
import { getRecommendationsForUser } from "../services/recommendationService";

export const getRecommendations = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const recommendations = await getRecommendationsForUser(userId);
    res.status(200).json(recommendations);
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).send("Error generating recommendations");
  }
};
