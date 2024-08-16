"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../util/axiosInstance";
import { firaSans, firaSansMedium } from "../../util/fonts";

interface Blog {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  author: string;
  subHeading: string;
  readTime: number;
  is_trending: string;
}

const BlogPage = () => {
  const [blog, setBlog] = useState<Blog>();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`${baseUrl}blog/${id}`);
        setBlog(res.data.data);
      } catch (error) {
        throw error;
      }
    };

    fetchBlogDetails();
  }, [id]);

  return (
    <div className="md:w-3/4 mx-auto mt-[20vh] gap-6 max-lg:text-xs">
      <p className="text-xs text-[#A47252]">
        {blog?.is_trending && "TRENDING"}
      </p>
      <p
        className={`${firaSansMedium.className} text-lg lg:text-2xl font-medium lg:w-3/4 mt-2`}
      >
        {blog?.subHeading}
      </p>
      <div className="flex justify-between">
        <p className="text-xs mt-2">
          {blog?.author} | {new Date(blog?.createdAt).toDateString()} |{" "}
          {blog?.readTime} mins read
        </p>
      </div>
      <div
        className={` lg:w-8/12 max-lg:m-4 sm:text-lg `}
        dangerouslySetInnerHTML={{ __html: blog?.body as any }}
      />
    </div>
  );
};

export default BlogPage;
