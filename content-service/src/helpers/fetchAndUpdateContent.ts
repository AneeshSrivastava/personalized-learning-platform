import { YouTubeVideo } from "../interfaces/GenerateContent";
import { ContentModel } from "../models/Content";
import { constants } from "../constants";
import { generateContent } from "./fetchContentViaYoutube";
import { randomUUID } from "crypto";

const updateDBWithContent = async (content: YouTubeVideo) => {
  try {
    await ContentModel.create({ id: randomUUID(), ...content });
  } catch (error) {
    console.error("Error updating database with content:", error);
  }
};
function getRandomTag(tags: string[]): string {
  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

export const fetchAndUpdateContent = async () => {
  try {
    const tag = getRandomTag(constants.queryTags);
    console.log(`Fetching and updating content for tag: ${tag}`);
    const content = await generateContent(tag);
    for (const item of content) {
      await updateDBWithContent(item);
    }
    console.log(`Content updated successfully for tag: ${tag}`);
  } catch (error) {
    console.error("Error fetching and updating content:", error);
  }
};
