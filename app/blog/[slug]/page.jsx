"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export default function BlogDetails() {
  const { slug } = useParams();
  const [ setAllBlogs] = useState([]);
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://cms.daikimedia.com/api/blogs`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAllBlogs(data);

        const foundBlog = data.find(item => item.slug === slug);
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchAllBlogs();
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

  return (
    <>
      <Head>
        <title>{decodeHtmlEntities(blog.title || "Blog Details")}</title>
        <meta
          name="description"
          content={decodeHtmlEntities(blog.description || blog.content?.substring(0, 150) || "Blog post details")}
        />
      </Head>
      <PrimaryNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <PageHero subtitle="BLOG Details" title="Recent blogs created <br/> by Daikai Media" />
        <article className="relative pb-150 w-full max-w-4xl mx-auto text-center">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="mb-16 overflow-hidden rounded-medium p-2.5 max-md:h-[400px] flex justify-center items-center">
              <img
                src={blog.featuredImage || "/images/default-blog.jpg"}
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
                <p className="text-lg">{blog.author || "Unknown Author"}</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D8DBD0" className="dark:fill-[#3B3C39]" />
                  </svg>
                </span>
                <p className="text-lg">{blog.date || "Unknown Date"}</p>
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
          </div>
        </article>

        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}