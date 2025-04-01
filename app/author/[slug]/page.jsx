"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import authorData from "@/data/singleAuthor.json";

const decodeHtmlEntities = (text) => {
  if (!text) return "";
  return text.replace(/&lt;br\/&gt;/g, "<br/>").replace(/&amp;/g, "&");
};

export default function AuthorDetails() {
  const params = useParams();
  const authorSlug = params?.slug || params?.id; // Extract slug outside of useEffect

  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authorSlug) {
      console.warn("No slug or id found in params");
      setIsLoading(false);
      return;
    }

    const authorsArray = Array.isArray(authorData) ? authorData : [authorData];
    const foundAuthor = authorsArray.find((a) => a.slug === authorSlug || a.id === authorSlug);

    setAuthor(foundAuthor || null);
    setIsLoading(false);
  }, [authorSlug]); // Use extracted slug instead of whole params object

  return (
    <div className="min-h-screen bg-gray-100">
      <PrimaryNavbar />
      <main className="mt-28 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {isLoading ? (
            <LoadingSkeleton />
          ) : author ? (
            <AuthorProfile author={author} />
          ) : (
            <AuthorNotFound />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// **Extracted Components for Cleanliness**
const LoadingSkeleton = () => (
  <div className="flex justify-center py-12">
    <div className="animate-pulse flex flex-col items-center">
      <div className="rounded-full bg-gray-300 h-40 w-40 mb-6"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
  </div>
);

const AuthorNotFound = () => (
  <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2 className="text-2xl font-bold text-gray-800 mb-3">Author Not Found</h2>
    <p className="text-gray-600 mb-6 max-w-md mx-auto">
      We couldn't find the author you're looking for. They may have been removed or the URL might be incorrect.
    </p>
    <Link href="/authors" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md">
      View All Authors
    </Link>
  </div>
);

// **Componentizing Author Profile**
const AuthorProfile = ({ author }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
    {/* Banner Section */}
    <div className="h-32 bg-gradient-to-r from-red-500 to-red-700 relative">
      <div className="absolute -bottom-16 left-8 md:left-12">
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {author.profile_picture ? (
            <Image src={author.profile_picture} alt={author.name || "Author profile"} fill sizes="128px" priority className="object-cover" />
          ) : (
            <div className="w-full h-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Author Details Section */}
    <div className="flex flex-col md:flex-row mt-20 px-8 md:px-12">
      <div className="w-full md:w-1/3 pr-0 md:pr-8">
        <h2 className="text-3xl font-bold text-gray-800">{author.name}</h2>
        {author.specialization && <p className="text-lg text-red-600 font-medium mt-1 mb-6">{author.specialization}</p>}

        {/* Social Links */}
        <SocialLinks links={author.social_links} />
      </div>

      {/* About Section */}
      <div className="w-full md:w-2/3 pt-6 md:pt-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">About</h3>
        {author.bio ? (
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(author.bio) }}></p>
          </div>
        ) : (
          <p className="text-gray-500 italic">No biography available for this author.</p>
        )}
      </div>
    </div>

    {/* Published Blogs Section */}
    {author.published_blogs?.length > 0 && <PublishedBlogs blogs={author.published_blogs} authorName={author.name} />}
  </div>
);

// **Componentizing Social Links**
const SocialLinks = ({ links }) => (
  <div className="my-6 flex gap-4">
    {links?.linkedin && (
      <SocialIcon href={links.linkedin} label="LinkedIn Profile" color="red-600" />
    )}
    {links?.twitter && (
      <SocialIcon href={links.twitter} label="Twitter Profile" color="red-500" />
    )}
  </div>
);

const SocialIcon = ({ href, label, color }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className={`bg-gray-100 hover:bg-${color} text-${color} hover:text-white p-3 rounded-full shadow-sm transition-all duration-300`} aria-label={label}>
    {/* Replace with respective SVG */}
  </Link>
);

// **Componentizing Published Blogs**
const PublishedBlogs = ({ blogs, authorName }) => (
  <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-200 mt-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Published Articles</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <Link key={index} href={`/blog/${blog.replace("blog/", "")}`} className="group">
          {/* Blog Card */}
        </Link>
      ))}
    </div>
  </div>
);
