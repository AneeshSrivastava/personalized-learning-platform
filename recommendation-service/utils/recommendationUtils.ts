import { Topic } from "../interfaces/topic";
import { Recommendation } from "../interfaces/recommendations";
import axios, { AxiosRequestConfig } from "axios";
import { Content } from "../interfaces/Content";

export const generateRecommendations = (userTopics: Topic[]) => {
  const recommendations: Recommendation[] = [];
  userTopics
    .map(async (topic) => {
      const axiosRequestConfig: AxiosRequestConfig = {
        method: "GET",
        url: "http://content-service:3000/content",
        data: {
          topic: topic.topic,
        },
      };
      return (await axios(axiosRequestConfig)) as Content[];
    });
    userTopics.filter((topic) => topic.level === "advanced")
  // Add more recommendation logic here...
  return recommendations;
};
