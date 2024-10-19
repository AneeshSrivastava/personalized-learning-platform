import axios from "axios";
import { Request, Response } from "express";
import { Recommendation } from "./interfaces/recommendations";
import { Progress } from "./interfaces/progress";

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userProgressResponse = await axios.get(`http://user-service:4000/user/${userId}/progress`);

    const userProgress: Progress[] = userProgressResponse.data;

    const recommendations = generateRecommendations(userProgress);

    res.status(200).json(recommendations);
  } catch (error) {
    console.error('Error fetching user progress:', error);
    res.status(500).send('Error generating recommendations');
  }
};

const generateRecommendations = (progress: Progress[]) => {
  const recommendations: Recommendation[] = [];

  progress.forEach((item) => {
    recommendations.push({
      topic: item.topic,
      content: `Learn more about ${item.topic} with advanced resources.`,
    });
  });

  return recommendations;
};
