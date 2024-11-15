export interface Content {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  tags: string[];
  summary: string;
  level: string;
  topic: string;
  createdBy: string;
  createdAt: Date;
  updatedAt?: Date;
}
