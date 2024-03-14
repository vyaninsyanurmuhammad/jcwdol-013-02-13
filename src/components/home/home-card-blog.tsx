import { BlogModel } from "@/models/states/blog-state-model";
import { getDetailBlogThunk } from "@/redux/features/blog-detail/blog-detail-thunk";
import { useAppDispatch } from "@/redux/hook";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCardBlog = ({ data }: { data: BlogModel }) => {
  return (
    <>
      <Link href={`/blog/${data.id}`} shallow>
        <div className="w-full md:w-[680px] h-fit pb-8 border-b-[1px] border-b-gray-200">
          <div className="w-full h-fit flex flex-col gap-2">
            <span className="text-sm">{data.createdAt.toString()}</span>
            <div className="flex flex-row gap-16">
              <div className="w-full h-fit flex flex-col gap-2">
                <h1 className="text-xl font-bold">{data.title} </h1>
                <p className="w-full line-clamp-3 !font-normal">
                  {documentToReactComponents(data.article as Document, {})}
                </p>
              </div>
              <div className="relative bg-gray-500 w-28 h-28 shrink-0">
                <Image
                  src={data.image.url}
                  alt={data.title}
                  fill
                  className="!relative object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeCardBlog;
