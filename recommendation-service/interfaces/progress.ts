export interface Progress {
  topicId: string;
  currentTopic: string;
  completedPercentage: number;
}

export interface ProgressData {
  data: Progress[];
}
