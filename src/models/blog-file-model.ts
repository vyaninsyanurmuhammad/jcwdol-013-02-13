import { AssetFields, ContentTypeClass, Metadata } from "./blog-model";

export type BlogFile = {
  metadata: Metadata;
  sys: BlogFileSys;
  fields: AssetFields;
};

export type BlogFileSys = {
  space: ContentTypeClass;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentTypeClass;
  revision: number;
  locale: string;
};
