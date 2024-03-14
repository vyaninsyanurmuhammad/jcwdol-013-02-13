import { getMetadataAPI } from "@/api/blog";
import BlogDetailMain from "@/components/blog/detail/blog-detail-main";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const response = await getMetadataAPI(id);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `Medium Lite - ${response.title}`,
    openGraph: {
      images: [`https:${response.image}`],
    },
  };
}

const BlogDetail = ({ params, searchParams }: Props) => {
  return (
    <>
      <BlogDetailMain id={params.id}/>
    </>
  );
};

export default BlogDetail;
