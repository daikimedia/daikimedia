import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import ArticleSchema from "@/components/schema/ArticleSchema";
import FallbackImage from "@/components/shared/FallbackImage";
import { getCMSImageUrl } from "@/utils/imageUtils";
import dayjs from "dayjs";

async function getBlogsFromAPI() {
  try {
    const response = await fetch("https://cms.daikimedia.com/api/blogs", {
      next: {
        tags: ["blogs"],
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
    return null;
  }
}

async function getBlogData(slug) {
  const apiBlogs = await getBlogsFromAPI();

  if (apiBlogs) {
    const apiBlog = apiBlogs.find((item) => item.slug === slug);
    if (apiBlog) {
      const relatedBlogs = apiBlogs
        .filter(
          (item) =>
            item.slug !== slug &&
            (item.category === apiBlog.category ||
              item.author === apiBlog.author)
        )
        .slice(0, 3);

      return {
        blog: apiBlog,
        relatedBlogs,
        isApiBlog: true,
      };
    }
  }

  return null;
}

export async function generateStaticParams() {
  const params = [];

  try {
    const apiBlogs = await getBlogsFromAPI();
    if (apiBlogs) {
      params.push(...apiBlogs.map((blog) => ({ slug: blog.slug })));
    }
  } catch (error) {
    console.error("Error fetching API slugs:", error);
  }

  const uniqueParams = params.filter(
    (param, index, self) =>
      index === self.findIndex((p) => p.slug === param.slug)
  );

  return uniqueParams;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlogData(slug);

  if (!data?.blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { blog } = data;

  const decodeHtmlEntities = (html) => {
    if (!html) return "";
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

  const getImageUrl = (imagePath) => {
    return getCMSImageUrl(imagePath);
  };

  const title = decodeHtmlEntities(
    blog.meta_title || blog.title || "Blog Details"
  );

  const description = decodeHtmlEntities(
    blog.meta_description ||
      blog.description ||
      blog.content?.replace(/<[^>]*>/g, "").substring(0, 150) ||
      "Blog post details"
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: getImageUrl(blog.featuredImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
      publishedTime: blog.created_at,
      authors: [blog.author || "Daiki Media"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getImageUrl(blog.featuredImage)],
    },
    alternates: {
      canonical: `https://www.daikimedia.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const data = await getBlogData(slug);

  if (!data?.blog) {
    notFound();
  }

  const { blog, relatedBlogs } = data;

  const decodeHtmlEntities = (html) => {
    if (!html) return "";
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

  const getImageUrl = (imagePath) => {
    return getCMSImageUrl(imagePath);
  };

  const getFormattedDate = () => {
    return blog.created_at
      ? dayjs(blog.created_at).format("MMMM D, YYYY")
      : "Unknown Date";
  };

  const getSchemaDate = (dateField) => {
    return blog[dateField] || blog.created_at || new Date().toISOString();
  };

  const getCurrentUrl = () => {
    return `https://www.daikimedia.com/blog/${slug}`;
  };

  return (
    <>
      <ArticleSchema
        headline={decodeHtmlEntities(blog.title || "Untitled Blog")}
        description={decodeHtmlEntities(
          blog.description ||
            blog.content?.replace(/<[^>]*>/g, "").substring(0, 160) ||
            "Blog post content"
        )}
        authorName={blog.author || "Daiki Media"}
        authorUrl="https://www.daikimedia.com/author"
        publisherName="Daiki Media"
        publisherLogo="https://www.daikimedia.com/logo.png"
        datePublished={getSchemaDate("created_at")}
        dateModified={
          getSchemaDate("updated_at") || getSchemaDate("created_at")
        }
        mainEntityUrl={getCurrentUrl()}
        imageUrl={getImageUrl(blog.featuredImage)}
        imageWidth={1200}
        imageHeight={630}
      />

      <main className="flex flex-col items-center justify-center">
        <PageHero
          subtitle=""
          title={decodeHtmlEntities(blog.title || "Untitled Blog")}
        />
        <article className="relative pb-150 w-full max-w-4xl mx-auto text-center">
          <div className="container relative">
            <div className="mb-16 overflow-hidden rounded-medium p-2.5 max-md:h-[400px] flex justify-center items-center">
              <FallbackImage
                src={getImageUrl(blog.featuredImage)}
                alt={decodeHtmlEntities(blog.title || "Untitled Blog")}
                className="rounded max-md:h-full max-md:object-cover w-[700px] h-[500px] max-md:object-center"
                width={700}
                height={500}
              />
            </div>

            <div className="blog-details text-center mb-12">
              <div className="mb-6 flex items-center justify-center gap-x-2">
                <p className="text-lg">
                  <a href="/author/lukesh-pillai">
                    {blog.author || "Daiki Media"}
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
                <time dateTime={blog.created_at} className="text-lg">
                  {getFormattedDate()}
                </time>
              </div>
            </div>

            <div className="blog-details-body text-center">
              <div
                className="text-gray-700 leading-relaxed mx-auto max-w-4xl prose prose-lg "
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(blog.content || ""),
                }}
              ></div>
            </div>

            {relatedBlogs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Blogs</h2>
                <div
                  className={`grid grid-cols-1 md:grid-cols-${relatedBlogs.length > 4 ? 4 : relatedBlogs.length} gap-8`}
                >
                  {relatedBlogs.map((relatedBlog) => (
                    <div
                      key={relatedBlog.slug}
                      className="border rounded-lg p-4"
                    >
                      <FallbackImage
                        src={getImageUrl(relatedBlog.featuredImage)}
                        alt={decodeHtmlEntities(relatedBlog.title)}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        width={300}
                        height={192}
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        <a href={`/blog/${relatedBlog.slug}`}>
                          {decodeHtmlEntities(relatedBlog.title)}
                        </a>
                      </h3>
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
