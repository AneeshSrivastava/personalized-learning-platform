import { constants } from "../constants";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { YouTubeVideo } from "../interfaces/GenerateContent";

const fetchYouTubeData = async (query: string): Promise<YouTubeVideo[]> => {
  try {
    const response = await axios.get(constants.youtubeApiUrl, {
      params: {
        part: "snippet",
        maxResults: 10,
        q: query,
        key: process.env.YOUTUBE_API_KEY,
      },
    });
    console.log("Fetched data from YouTube successfully");
    return response.data.items.map((item: any) => ({
      title: item.snippet.title,
      description: item.snippet.description,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error("Error fetching data from YouTube:", error);
    throw error;
  }
};

export const generateContent = async (tag: string) => {
  console.log("Generating content for tag:", tag);
  const youtubeData = await fetchYouTubeData(`search_query=${tag}`);

  const geminiApiKey = process.env.GEMINI_API_KEY;

  if (!geminiApiKey) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
  }
  console.log("Initializing Google Generative AI");
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const results = [];
  let index = 0;
  console.log("Enriching youtube data with generated content");
  for (const video of youtubeData) {
    const modelResp =
      await model.generateContent(`Summarize the video below and generate 5 TAGs. Respond in a JSON format with 'summary', 'tags'(array), 'topic' and 'level' added to below JSON. Make sure that tags only include coding topics in the video. For 'level' it can be only 'low', 'medium' and 'high' which would indicate how tough the topic is to learn. 'summary' should be a para covering key topic and explanation. For 'topic' generate 1 word that video(for example - if its a python based video then it should be 'python', if typescript based then 'typescript' and make sure that topic is not something generic(like 'programming', its too broad) but specific like coding language, technologies used, etc. 'topic' would always be 1 word and in lower case. Below are youtube video and description:\n
        ${video.url}\n${video.title}\n ${video.description}}`);
    const jsonString = modelResp.response.text().trim().slice(7, -4);
    const parsedModelResponse = JSON.parse(jsonString);
    results.push({
      ...video,
      ...parsedModelResponse,
    });
    index++;
    console.log(
      `Generated content for video ${index} of ${youtubeData.length}`
    );
  }
  console.log(`Final content generated successfully for tag: ${tag}`);
  return results;
};
