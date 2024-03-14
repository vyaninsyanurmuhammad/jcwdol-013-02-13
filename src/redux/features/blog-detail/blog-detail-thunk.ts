import { BlogFile } from "@/models/blog-file-model";
import { Article, Blog, Item } from "@/models/blog-model";
import { BlogModel } from "@/models/states/blog-state-model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailBlogThunk = createAsyncThunk(
  "blog-detail/getDetailBlog",
  async (id: string) => {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries/${id}/?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=blog`
    );

    const data: Item = response.data;

    const responseImage = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/assets/${data.fields.image.sys.id}/?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
    );

    const asset: BlogFile = responseImage.data;

    const result: BlogModel = {
      id: data.sys.id,
      title: data.fields.title,
      author: data.fields.author,
      createdAt: data.sys.createdAt,
      article: data.fields.article,
      image: {
        id: asset.sys.id,
        title: asset.fields.title,
        url: `https:${asset.fields.file.url}`,
      },
    };

    return result;
  }
);
