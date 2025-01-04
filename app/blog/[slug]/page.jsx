"use client";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!params.slug) return;

    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://daiki.media/wp-json/wp/v2/posts?slug=${params.slug}`
        );
        const result = await response.json();
        setBlog(result[0]);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [params.slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <PrimaryNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <PageHero
          subtitle="BLOG Details"
          title="Recent blogs created <br/> by aplio"
        />
        <article className="relative pb-150 w-full max-w-4xl mx-auto text-center">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="mb-16 overflow-hidden rounded-medium p-2.5 max-md:h-[400px] flex justify-center items-center">
              <img
                src={blog?.yoast_head_json?.og_image?.[0]?.url}
                alt={blog.title.rendered || "Blog image"}
                className="rounded max-md:h-full max-md:object-cover w-[700px] h-[500px] max-md:object-center"
                width={400}
                height={300}
              />
            </div>

            <div className="blog-details text-center mb-12">
              <h2 className="text-3xl font-bold md:ml-[120px] mb-4">
                {blog.title.rendered}
              </h2>
              <div className="mb-6 flex items-center justify-center gap-x-2">
                <p className="text-lg">{blog.author_name}</p>
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
                <p className="text-lg">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="blog-details-body text-center">
              <div
                className="text-gray-700 leading-relaxed mx-auto max-w-4xl"
                dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
              ></div>
            </div>
          </div>
        </article>

        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
