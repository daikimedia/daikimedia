"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/pagination";

if (typeof window !== "undefined") {
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preconnect";
  preloadLink.href = "https://cms.daikimedia.com";
  document.head.appendChild(preloadLink);
}

const importBlogData = async () => {
  try {
    const blogData = await import("../../data/singleBlogData.json");
    return blogData.default || blogData;
  } catch (error) {
    console.error("Error importing blog data:", error);
    return [];
  }
};

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const fixImagePath = (path) => {
  if (!path) return "";
  if (!path.startsWith("http")) {
    return `https://cms.daikimedia.com/${path.replace(/\\/g, "/")}`;
  }
  return path;
};

const fetcher = async (url) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

const FeatureBlog = () => {
  const { data: apiBlogs, error: apiError } = useSWR(
    "https://cms.daikimedia.com/api/blogs",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      dedupingInterval: 3600000,
      errorRetryCount: 2,
    }
  );

  const { data: localBlogData } = useSWR(
    "local-blog-data",
    async () => {
      try {
        const data = await importBlogData();
        return data.map((blog) => ({
          ...blog,
          content: stripHtml(blog.content?.rendered || blog.content || ""),
        }));
      } catch (error) {
        console.error("Error loading local blog data:", error);
        return [];
      }
    },
    { revalidateOnFocus: false }
  );

  const processedApiBlogs = apiBlogs
    ? apiBlogs.map((blog) => ({
        ...blog,
        content: stripHtml(blog.content?.rendered || blog.content || ""),
        featuredImage: fixImagePath(blog.featuredImage),
        date: blog.created_at || "Unknown Date",
      }))
    : [];

  const combinedBlogs =
    apiBlogs && localBlogData
      ? [
          ...processedApiBlogs,
          ...localBlogData.filter(
            (jsonBlog) =>
              !processedApiBlogs.some(
                (apiBlog) => apiBlog.slug === jsonBlog.slug
              )
          ),
        ]
      : localBlogData || [];

  const isLoading = !apiBlogs && !apiError && !localBlogData;

  const stripHTML = (html) => {
    if (typeof document === "undefined") return html;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const featuredBlogFiltered = combinedBlogs.filter(
    (blog) => blog.featured === true || blog.featured === undefined
  );

  return (
    <div className="relative">
      {isLoading ? (
        <p className="text-center">Loading blogs...</p>
      ) : apiError && !localBlogData?.length ? (
        <div className="text-center p-4">
          <p>Unable to load blogs. Please try again later.</p>
        </div>
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
                <SwiperSlide
                  key={`${blogItem.slug || blogItem.id || "blog"}-${index}`}
                >
                  <article>
                    <div className="grid grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                      <div className="relative h-full w-full xl:min-h-[330px]">
                        <img
                          src={
                            blogItem.featuredImage ||
                            "/images/blog/blog-fallback-img.webp"
                          }
                          alt={blogItem.title || "Blog image"}
                          className="w-full rounded-xl h-[450px] max-md:object-cover max-md:object-center"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "/images/blog/blog-fallback-img.webp";
                          }}
                        />
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
