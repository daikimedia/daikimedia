"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";

const FinancialBlog = ({ className = "dark:bg-dark pb-150 pt-150" }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://daiki.media/wp-json/wp/v2/posts?page=1&per_page=3"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blogs data");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText;
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className={cn("relative bg-white max-md:pb-20", className)}>
      <div className="absolute left-0 right-0 top-1/2 h-full w-full -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-[length:600px_1800px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <h2>Latest News and Expert Insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col">
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px] "></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/25 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {blogs?.map((blogItems) => (
              <article
                className="cursor-pointer rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                key={blogItems.id}
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                  {/* <img
                    src={blogItems.yoast_head_json.og_image[0].url}
                    alt="Blog Image"
                    className="mb-6 w-full rounded-md"
                    width={339}
                    height={198} */}
                  {/* /> */}
                  <div>
                    <Link href={`/blog/${blogItems.slug}`} className="block">
                      <h3 className="mb-3 font-semibold leading-[1.33]">
                        {stripHTML(blogItems.title.rendered)}
                      </h3>
                    </Link>
                    <div className="mb-4 flex items-center gap-x-2 ">
                      <p>{dayjs(blogItems.date).format("MMMM D, YYYY")}</p>
                    </div>
                    <ReactMarkdown>
                      {blogItems?.yoast_head_json.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialBlog;
