"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import ArticleSchema from "@/components/schema/ArticleSchema";
import blogData from "@/data/singleBlogData.json";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isApiBlog, setIsApiBlog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://cms.daikimedia.com/api/blogs");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const foundBlog = data.find((item) => item.slug === slug);
        if (foundBlog) {
          setBlog(foundBlog);
          setIsApiBlog(true);

          const related = data
            .filter(
              (item) =>
                item.slug !== slug &&
                (item.category === foundBlog.category ||
                  item.author === foundBlog.author)
            )
            .slice(0, 3);

          setRelatedBlogs(related);
        } else {
          throw new Error("Blog not found in API");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);

        const fallbackBlog = blogData.find((item) => item.slug === slug);
        if (fallbackBlog) {
          setBlog(fallbackBlog);
          setIsApiBlog(false);

          const related = blogData
            .filter(
              (item) =>
                item.slug !== slug &&
                (item.category === fallbackBlog.category ||
                  item.author === fallbackBlog.author)
            )
            .slice(0, 3);

          setRelatedBlogs(related);
          setError(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlogs();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Blog post not found.</p>
      </div>
    );
  }

  const decodeHtmlEntities = (html) => {
    if (typeof window === "undefined") return html;
    const textArea = document.createElement("textarea");
    textArea.innerHTML = html;
    return textArea.value;
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/default-blog.jpg";
    return isApiBlog ? `http://cms.daikimedia.com/${imagePath}` : imagePath;
  };

  const getFormattedDate = () => {
    if (isApiBlog) {
      return blog.created_at ? blog.created_at.split("T")[0] : "Unknown Date";
    } else {
      return blog.date ? blog.date.split("T")[0] : "Unknown Date";
    }
  };

  // Function to get full ISO date for schema
  const getSchemaDate = (dateField) => {
    if (isApiBlog) {
      return blog[dateField] || blog.created_at || new Date().toISOString();
    } else {
      return blog[dateField] || blog.date || new Date().toISOString();
    }
  };

  // Function to get current page URL
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://yourdomain.com/blog/${slug}`; // Replace with your actual domain
  };

  return (
    <>
      <Head>
        <title>{decodeHtmlEntities(blog.title || "Blog Details")}</title>
        <meta
          name="description"
          content={decodeHtmlEntities(
            blog.description ||
              blog.content?.substring(0, 150) ||
              "Blog post details"
          )}
        />
      </Head>

      <ArticleSchema
        headline={decodeHtmlEntities(blog.title || "Untitled Blog")}
        description={decodeHtmlEntities(
          blog.description ||
            blog.content?.replace(/<[^>]*>/g, "").substring(0, 160) ||
            "Blog post content"
        )}
        authorName={blog.author || "Daiki Media"}
        authorUrl="https://daikimedia.com/author"
        publisherName="Daiki Media"
        publisherLogo="https://daikimedia.com/logo.png"
        datePublished={getSchemaDate("created_at")}
        dateModified={
          getSchemaDate("updated_at") || getSchemaDate("created_at")
        }
        mainEntityUrl={getCurrentUrl()}
        imageUrl={getImageUrl(blog.featuredImage)}
        imageWidth={1200}
        imageHeight={630}
      />

      <main className="flex flex-col items-center justify-center ">
        <PageHero
          subtitle="BLOG Details"
          title="Recent blogs created <br/> by Daiki Media"
        />
        <article className="relative pb-150 w-full max-w-4xl mx-auto text-center">
          <div className="container relative">
            <div className="mb-16 overflow-hidden rounded-medium p-2.5 max-md:h-[400px] flex justify-center items-center">
              <img
                src={getImageUrl(blog.featuredImage)}
                alt={decodeHtmlEntities(blog.title || "Untitled Blog")}
                className="rounded max-md:h-full max-md:object-cover w-[700px] h-[500px] max-md:object-center"
                width={400}
                height={300}
              />
            </div>

            <div className="blog-details text-center mb-12">
              <h2 className="text-3xl font-bold md:ml-[120px] mb-4">
                {decodeHtmlEntities(blog.title || "Untitled Blog")}
              </h2>
              <div className="mb-6 flex items-center justify-center gap-x-2">
                <p className="text-lg">
                  <a href="/author/lukesh-pillai">
                    {blog.author || "Unknown Author"}
                  </a>
                </p>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle
                      cx="2.5"
                      cy="3"
                      r="2.5"
                      fill="#D8DBD0"
                      className="dark:fill-[#3B3C39]"
                    />
                  </svg>
                </span>
                <p className="text-lg">{getFormattedDate()}</p>
              </div>
            </div>

            <div className="blog-details-body text-center">
              <div
                className="text-gray-700 leading-relaxed mx-auto max-w-4xl"
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(blog.content || ""),
                }}
              ></div>
            </div>

            {false && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8">Related Blogs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.slice(0, 10).map((relatedBlog) => (
                    <div
                      key={relatedBlog.slug}
                      className="border rounded-lg p-4"
                    >
                      <img
                        src={getImageUrl(relatedBlog.featuredImage)}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        width={300}
                        height={192}
                        loading="lazy"
                      />
                      <h4 className="text-xl font-semibold mb-2">
                        {decodeHtmlEntities(relatedBlog.title)}
                      </h4>
                      <p className="text-gray-600">{relatedBlog.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
