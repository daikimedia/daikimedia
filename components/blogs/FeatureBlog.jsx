"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const importBlogData = async () => {
  try {
    const blogData = await import("../../data/singleBlogData.json");
    return blogData.default || blogData;
  } catch (error) {
    console.error("Error importing blog data:", error);
    return [];
  }
};

const FeatureBlog = () => {
  const [featureBlog, setFeatureBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const processedBlogData = await importBlogData();

        const stripHtml = (html) => {
          if (!html) return "";
          return html.replace(/<\/?[^>]+(>|$)/g, "");
        };

        const processedBlogs = processedBlogData.map((blog) => ({
          ...blog,
          content: stripHtml(blog.content?.rendered || blog.content || ""),
        }));

        const response = await fetch("https://cms.daikimedia.com/api/blogs");

        if (response.ok) {
          const apiBlogs = await response.json();

          const processedApiBlogData = apiBlogs.map((blog) => ({
            ...blog,
            content: stripHtml(blog.content?.rendered || blog.content || ""),
            featuredImage: fixImagePath(blog.featuredImage),
            date: blog.created_at || "Unknown Date",
          }));

          const combinedBlogs = [
            ...processedBlogs,
            ...processedApiBlogData.filter(
              (apiBlog) =>
                !processedBlogs.some((jsonBlog) => jsonBlog.slug === apiBlog.slug)
            ),
          ];

          setFeatureBlog(combinedBlogs);
        } else {
          setFeatureBlog(processedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setFeatureBlog([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const stripHTML = (html) => {
    if (typeof document === "undefined") return html;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const fixImagePath = (path) => {
    if (!path) return "";
    if (!path.startsWith("http")) {
      return `https://cms.daikimedia.com/${path.replace(/\\/g, "/")}`;
    }
    return path;
  };

  const featuredBlogFiltered = featureBlog.filter(
    (blog) => blog.featured === true || blog.featured === undefined
  );

  return (
    <div className="relative">
      {isLoading ? (
        <p className="text-center">Loading blogs...</p>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="swiper !pb-20 md:!px-6"
        >
          {featuredBlogFiltered.length > 0 ? (
            featuredBlogFiltered.slice(0, 3).map((blogItem, index) => {
              const contentPreview = blogItem.content
                ? stripHTML(blogItem.content).slice(0, 120)
                : "";

              return (
                <SwiperSlide key={`${blogItem.slug || blogItem.id || "blog"}-${index}`}>
                  <article>
                    <div className="grid grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                      <div className="relative h-full w-full xl:min-h-[330px]">
                        {blogItem.featuredImage && (
                          <img
                            src={blogItem.featuredImage}
                            alt={blogItem.title || "Blog image"}
                            className="w-full rounded-xl max-md:h-[350px] max-md:object-cover max-md:object-center"
                          />
                        )}
                      </div>
                      <div>
                        <Link href={`/blog/${blogItem.slug}`} className="block">
                          <h3 className="mb-3 font-semibold leading-[1.33]">
                            {stripHTML(blogItem.title || "")}
                          </h3>
                        </Link>
                        <div className="mb-4 flex items-center gap-x-2">
                          <p>{new Date(blogItem.date).toLocaleDateString()}</p>
                        </div>
                        <ReactMarkdown className="mb-6">
                          {contentPreview}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })
          ) : (
            <div>No featured blogs available</div>
          )}
        </Swiper>
      )}
    </div>
  );
};

export default FeatureBlog;
