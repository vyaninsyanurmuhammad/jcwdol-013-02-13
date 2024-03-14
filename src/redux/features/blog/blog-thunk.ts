import { Article, Blog, Item } from "@/models/blog-model";
import { BlogModel } from "@/models/states/blog-state-model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogsThunk = createAsyncThunk("blog/getBlogs", async () => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=blog`
  );

  const data: Blog = response.data;

  const assetsDataCollections = data.includes.Asset;

  const result: BlogModel[] = data.items.map((item) => {
    const imageAssets = assetsDataCollections.filter(
      (asset) => item.fields.image.sys.id === asset.sys.id
    );

    const article: Article = {
      ...item.fields.article,
      content: [
        item.fields.article.content.filter(
          (content) => content.nodeType === "paragraph"
        )[0],
      ],
    };

    return {
      id: item.sys.id,
      title: item.fields.title,
      author: item.fields.author,
      createdAt: item.sys.createdAt,
      article: article,
      image: {
        id: item.fields.image.sys.id,
        title: imageAssets[0].fields.title,
        url: `https:${imageAssets[0].fields.file.url}`,
      },
    };
  });

  return result;
});
