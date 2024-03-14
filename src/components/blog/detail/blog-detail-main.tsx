"use client";

import { getDetailBlogThunk } from "@/redux/features/blog-detail/blog-detail-thunk";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useEffect } from "react";

const BlogDetailMain = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const blog = useAppSelector((state) => state.blogDetailReducer.blog);
  const isLoadingPage = useAppSelector(
    (state) => state.blogDetailReducer.isLoading
  );

  useEffect(() => {
    dispatch(getDetailBlogThunk(id));
  }, []);

  if (blog === undefined || isLoadingPage === true) {
    return (
      <>
        <div className="h-full w-full flex justify-center items-center">
          <CircleNotch size={48} className="animate-spin"/>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-fit flex justify-center px-6">
        <div className="w-full md:w-[680px] h-full flex flex-col gap-12 py-12">
          <div className="w-full h-fit flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <div className="flex flex-row gap-2 items-baseline">
              <span>by {blog.author}</span>
              <span className="text-sm text-gray-400">
                {blog.createdAt.toString()}
              </span>
            </div>
          </div>

          <div className="h-fit w-full relative">
            <Image
              src={blog.image.url}
              fill
              alt={blog.image.title}
              className="!relative"
            />
          </div>
          <article className="relative prose text-wrap">
            {documentToReactComponents(blog.article as Document, {})}
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetailMain;
