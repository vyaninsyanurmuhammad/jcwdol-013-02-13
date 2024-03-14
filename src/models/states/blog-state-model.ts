import { Article } from "../blog-model";

export type BlogInitialState = {
  blogs: BlogModel[];
};

export type BlogModel = {
  id: string;
  title: string;
  author: string;
  createdAt: Date;
  article: Article;
  image: Image;
};

export type Image = {
  id: string;
  title: string;
  url: string;
};
