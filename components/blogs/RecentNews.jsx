"use client";
import { useState, useEffect, useMemo } from "react";
import Pagination from "../shared/Pagination";
import BlogItems from "./BlogItems";
import blogData from "../../data/singleBlogData.json";

const RecentNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [featureBlog, setFeatureBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const stripHtml = (html) => {
          if (!html) return "";
          return html.replace(/<\/?[^>]+(>|$)/g, "");
        };

        const processedLocalBlogData = blogData.map((blog) => ({
          ...blog,
          content: stripHtml(blog.content?.rendered || blog.content || ""),
        }));

        try {
          const response = await fetch(`https://cms.daikimedia.com/api/blogs`);

          if (response.ok) {
            const apiBlogs = await response.json();

            const processedApiBlogData = apiBlogs.map((blog) => ({
              ...blog,
              content: stripHtml(blog.content?.rendered || blog.content || ""),
              featuredImage: fixImagePath(blog.featuredImage), 
              date: blog.created_at || "Unknown Creator", 
            }));

            
            const combinedBlogs = [
              ...processedLocalBlogData,
              ...processedApiBlogData.filter(
                (apiBlog) =>
                  !processedLocalBlogData.some((jsonBlog) => jsonBlog.slug === apiBlog.slug)
              ),
            ];

            setFeatureBlog(combinedBlogs);
          } else {
            setFeatureBlog(processedLocalBlogData);
          }
        } catch (apiError) {
          console.error("API fetch error:", apiError);
          setFeatureBlog(processedLocalBlogData);
        }
      } catch (error) {
        console.error("Error processing blogs:", error);
        setFeatureBlog([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fixImagePath = (path) => {
    if (!path) return "";
    if (!path.startsWith("http")) {
      return `https://cms.daikimedia.com/${path.replace(/\\/g, "/")}`;
    }
    return path;
  };

  
  const paginationData = useMemo(() => {
    const totalPage = Math.ceil(featureBlog.length / itemsPerPage);
    
    const paginateData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return featureBlog.slice(startIndex, endIndex);
    };

    return {
      totalPage,
      currentPageData: paginateData()
    };
  }, [featureBlog, currentPage, itemsPerPage]);

  const goToNextPage = () => {
    if (currentPage < paginationData.totalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const paginateFunction = {
    totalPage: paginationData.totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  };

  return (
    <section className="relative py-150 max-md:py-20">
      <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative mb-16">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline text-gray-900">
            Stay updated with the latest trends, news, and insights from the
            world of Daikai Media.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Recent News & Insights
          </h2>
        </div>
        <div className="relative z-10">
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-lg text-gray-600">Loading...</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              {paginationData.currentPageData.map((blog) => (
                <BlogItems
                  key={blog.id}
                  id={blog.id}
                  slug={blog.slug}
                  blogData={blog}
                  content={blog.content}
                  date={blog.date} 
                  thumbnail={blog.featuredImage}
                  status={blog.categories}
                  title={blog.title || "Untitled"}
                  column={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  );
};

export default RecentNews;
