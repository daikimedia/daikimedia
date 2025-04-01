"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import authorData from "@/data/singleAuthor.json";
import { LinkedIn, Twitter, Globe, Mail } from "lucide-react";

const decodeHtmlEntities = (text) => {
  if (!text) return "";
  return text.replace(/&lt;br\/&gt;/g, "<br/>").replace(/&amp;/g, "&");
};

export default function AuthorDetails() {
  const params = useParams();
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      setIsLoading(true);
      try {
        const foundAuthor = authorData.find((a) => a.slug === params.id);
        setAuthor(foundAuthor || null);
      } catch (error) {
        console.error("Error fetching author data:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [params?.id]);

  const metaTitle = author ? `${decodeHtmlEntities(author.name)} - Author Profile` : "Author Details";
  const metaDescription = author ? decodeHtmlEntities(author.bio).substring(0, 160) : "Author profile details";

  return (
    <>
      <PrimaryNavbar />
      <main className="flex flex-col min-h-screen bg-gray-50">
        <PageHero 
          subtitle="Author Profile" 
          title={author ? `About ${author.name}` : "Loading..."}
          className="bg-gradient-to-r from-blue-600 to-purple-600"
        />
        
        <div className="container mx-auto px-4 py-8 mb-12">
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-gray-300 h-24 w-24 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-64"></div>
              </div>
            </div>
          ) : author ? (
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-b from-blue-100 to-blue-50 p-6 flex justify-center items-start">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src={author.profile_picture} 
                      alt={author.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{author.name}</h1>
                  <p className="text-lg text-blue-600 font-medium mb-3">{author.specialization}</p>
                  
                  <div className="prose max-w-none mb-4 text-gray-600">
                    <p dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(author.bio) }}></p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    {author.social_links?.linkedin && (
                      <Link 
                        href={author.social_links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-full transition-colors"
                      >
                        <LinkedIn size={16} />
                        <span>LinkedIn</span>
                      </Link>
                    )}
                    {author.social_links?.twitter && (
                      <Link 
                        href={author.social_links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-500 px-4 py-2 rounded-full transition-colors"
                      >
                        <Twitter size={16} />
                        <span>Twitter</span>
                      </Link>
                    )}
                    {author.social_links?.website && (
                      <Link 
                        href={author.social_links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full transition-colors"
                      >
                        <Globe size={16} />
                        <span>Website</span>
                      </Link>
                    )}
                    {author.email && (
                      <Link 
                        href={`mailto:${author.email}`} 
                        className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full transition-colors"
                      >
                        <Mail size={16} />
                        <span>Email</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
                            {author.published_blogs?.length > 0 && (
                <div className="border-t border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                    Published Articles
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {author.published_blogs.map((blog, index) => (
                      <div key={index} className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg transition-colors">
                        <Link href={`/blog/${blog}`} className="block">
                          <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                            {blog.replace(/-/g, " ")}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date().toLocaleDateString()} • {Math.floor(Math.random() * 10) + 2} min read
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Author Not Found</h2>
              <p className="text-gray-600 mb-6">We couldn't find the author you're looking for.</p>
              <Link 
                href="/authors"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View All Authors
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}