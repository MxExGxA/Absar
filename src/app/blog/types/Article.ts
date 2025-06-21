import { BlocksContent } from "@strapi/blocks-react-renderer";

export type articleType = {
  id: number;
  author: string;
  title: string;
  duration: number;
  cover: { url: string };
  content: BlocksContent;
  createdAt: string;
  description: string;
};
