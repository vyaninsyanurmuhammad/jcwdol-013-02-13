"use client";

import React, { useEffect } from "react";
import HomeCardBlog from "./home-card-blog";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getBlogsThunk } from "@/redux/features/blog/blog-thunk";

const HomeMain = () => {
  const blogs = useAppSelector((state) => state.blogReducer.blogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogsThunk());
  }, []);

  return (
    <>
      <div className="h-full flex justify-center">
        <div className="h-full border-x-[1px] border-x-gray-200">
          <div className="h-full w-full flex flex-col gap-7 py-10 px-6">
            {blogs.map((data, index) => (
              <HomeCardBlog key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
