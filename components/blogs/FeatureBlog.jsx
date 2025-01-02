"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureBlog = () => {
  const [featureBlog, setFeatureBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://daikimedia.com/wp-json/wp/v2/posts?page=1&per_page=10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const data = await response.json();
      setFeatureBlog(data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    // Remove all HTML tags
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const featuredBlogFiltered = featureBlog.filter(
    (blog) => blog.featured === true || blog.featured === undefined
  );

  return (
    <div className="relative">
      <div className="absolute -top-150 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative pb-150 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:content-[url('/images/blog/blog-seperator.svg')] dark:after:content-[url('/images/blog/blog-seperator-dark.svg')] max-lg:max-w-full max-md:pb-10 max-md:after:hidden">
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:max-w-full max-md:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

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
                featuredBlogFiltered.map((blogItem) => {
                  const contentPreview = blogItem.content?.rendered
                    ? stripHTML(blogItem.content.rendered).slice(0, 120)
                    : "";

                  return (
                    <SwiperSlide key={blogItem.id}>
                      <article className="swiper-slide rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                        <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark max-md:p-4">
                          <div className="grid grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                            <div className="relative h-full w-full xl:min-h-[330px]">
                              {blogItem.yoast_head_json?.og_image?.[0]?.url && (
                                <img
                                  src={blogItem.yoast_head_json.og_image[0].url}
                                  alt={blogItem.title?.rendered || "Blog image"}
                                  className="w-full rounded-xl max-md:h-[350px] max-md:object-cover max-md:object-center"
                                />
                              )}
                            </div>

                            <div>
                              <Link
                                href={`/blog/${blogItem.slug}`}
                                className="block"
                              >
                                <h3 className="mb-3 font-semibold leading-[1.33]">
                                  {stripHTML(blogItem.title?.rendered || "")}
                                </h3>
                              </Link>
                              <div className="mb-4 flex items-center gap-x-2">
                                <p>
                                  {new Date(blogItem.date).toLocaleDateString()}
                                </p>
                              </div>
                              <ReactMarkdown className="mb-6">
                                {contentPreview}
                              </ReactMarkdown>
                            </div>
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
      </div>
    </div>
  );
};

export default FeatureBlog;
