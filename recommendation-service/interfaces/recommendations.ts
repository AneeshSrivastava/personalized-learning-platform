export interface Recommendation {
  contentId: string;
  topic: string;
  priority: "high" | "medium" | "low";
  difficulty: "beginner" | "medium" | "advanced";
}
