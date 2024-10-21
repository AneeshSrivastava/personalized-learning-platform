import axios from "axios";
import { generateRecommendations } from "../utils/recommendationUtils";

export const getRecommendationsForUser = async (userId: string) => {
  const userProgressResponse = await axios.get(
    `http://user-service:3000/user/${userId}/progress`
  );
  const userProgress = userProgressResponse.data;

  const recommendations = generateRecommendations(userProgress);
  return recommendations;
};
