import { Topic } from "../interfaces/topic";
import { Recommendation } from "../interfaces/recommendations";
import axios, { AxiosRequestConfig } from "axios";
import { Content } from "../interfaces/Content";

export const generateRecommendations = async (): Promise<Recommendation[]> => {
  const axiosRequestConfig: AxiosRequestConfig = {
    method: "GET",
    url: "http://content-service:5001/api/content",
  };
  const contents = (await axios(axiosRequestConfig)) as Content[];
  // Add more recommendation logic here...
  return contents.map((content) => {
    return {
      contentId: content.id,
      title: content.title,
      description: content.description,
      summary: content.summary,
      level: content.level,
      tags: content.tags,
      thumbnail: content.thumbnail,
      topic: content.topic,
      url: content.url,
    };
  });
};
