import axios from "axios";
import { generateRecommendations } from "../utils/recommendationUtils";

export const getRecommendationsForUser = async () => {
  return await generateRecommendations();
};
