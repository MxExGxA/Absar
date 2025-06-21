export type articleType = {
  id: number;
  author: string;
  title: string;
  duration: number;
  cover: { url: string };
  content: any[];
  createdAt: string;
  description: string;
};
