import { Progress } from "../interfaces/progress";
import { Recommendation } from "../interfaces/recommendations";
import { randomUUID } from "crypto";

export const generateRecommendations = (userProgress: Progress[]) => {
  //TODO- Improve logic here if needed
  const recommendations: Recommendation[] = [];
  
  // TODO- Handle new user and data fetching from content service here. For new user - userProgress=[]

  userProgress.forEach((progress) => {
    if (
      progress.completedPercentage < 50 &&
      progress.completedPercentage > 20
    ) {
      recommendations.push({
        topic: progress.currentTopic,
        priority: "medium",
        difficulty: "medium",
        contentId: randomUUID(),
      });
    } else if (progress.completedPercentage < 20) {
      recommendations.push({
        topic: progress.currentTopic,
        priority: "high",
        difficulty: "medium",
        contentId: randomUUID(),
      });
    } else if (progress.completedPercentage > 80) {
      recommendations.push({
        topic: progress.currentTopic,
        priority: "low",
        difficulty: "medium",
        contentId: randomUUID(),
      });
    }
  });

  // Add more recommendation logic here...
  return recommendations;
};
