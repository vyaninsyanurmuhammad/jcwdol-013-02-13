import { BlogModel } from "./blog-state-model";

export type BlogDetailInitialState = {
  blog?: BlogModel;
  isLoading: boolean;
};

