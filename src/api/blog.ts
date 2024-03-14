import { BlogFile } from "@/models/blog-file-model";
import { Item } from "@/models/blog-model";
import { BlogModel } from "@/models/states/blog-state-model";
import axios from "axios";

export const getMetadataAPI = async (id: string) => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries/${id}/?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=blog`
  );

  const data: Item = response.data;

  const responseImage = await axios.get(
    `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/assets/${data.fields.image.sys.id}/?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  );

  const asset: BlogFile = responseImage.data;

  return {
    title: data.fields.title,
    image: asset.fields.file.url,
  };
};
