export interface Content {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt?: Date;
}
