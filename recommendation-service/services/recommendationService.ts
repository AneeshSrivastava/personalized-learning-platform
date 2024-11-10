import axios from "axios";
import { generateRecommendations } from "../utils/recommendationUtils";

export const getRecommendationsForUser = async (userId: string) => {
  const userTopicResponse = await axios.get(
    `http://user-service:3000/user/${userId}/topic`
  );
  const userTopics = userTopicResponse.data;

  const recommendations = generateRecommendations(userTopics);
  return recommendations;
};
