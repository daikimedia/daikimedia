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
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authorsArray = Array.isArray(authorData) ? authorData : [authorData];
    
    setIsLoading(true);
    
    const authorSlug = params?.slug || params?.id;
    
    if (!authorSlug) {
      console.warn("No slug or id found in params");
      setIsLoading(false);
      return;
    }
    
    try {
      const foundAuthor = authorsArray.find(a => a.slug === authorSlug || a.id === authorSlug);
      setAuthor(foundAuthor || null);
    } catch (error) {
      console.error("Error finding author:", error);
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  return (
    <div className="min-h-screen bg-gray-100">
      <PrimaryNavbar />
      <main className="mt-28 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-full bg-gray-300 h-40 w-40 mb-6"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
          ) : author ? (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-32 bg-gradient-to-r from-red-500 to-red-700 relative">
                <div className="absolute -bottom-16 left-8 md:left-12">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {author.profile_picture ? (
                      <Image 
                        src={author.profile_picture} 
                        alt={author.name || "Author profile"}
                        fill
                        sizes="128px"
                        priority
                        className="object-cover"
                      />
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
              
              <div className="flex flex-col md:flex-row mt-20 px-8 md:px-12">
                <div className="w-full md:w-1/3 pr-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-gray-800">{author.name}</h2>
                  {author.specialization && (
                    <p className="text-lg text-red-600 font-medium mt-1 mb-6">{author.specialization}</p>
                  )}
                  
                  <div className="my-6 flex gap-4">
                    {author.social_links?.linkedin && (
                      <Link 
                        href={author.social_links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gray-100 hover:bg-red-600 text-red-600 hover:text-white p-3 rounded-full shadow-sm transition-all duration-300"
                        aria-label="LinkedIn Profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                    )}
                    {author.social_links?.twitter && (
                      <Link 
                        href={author.social_links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-full shadow-sm transition-all duration-300"
                        aria-label="Twitter Profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
                
                
                <div className="w-full md:w-2/3 pt-6 md:pt-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    About
                  </h3>
                  
                  {author.bio ? (
                    <div className="prose max-w-none text-gray-700 leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(author.bio) }}></p>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No biography available for this author.</p>
                  )}
                </div>
              </div>
              
              {author.published_blogs?.length > 0 && (
                <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-200 mt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Published Articles
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {author.published_blogs.map((blog, index) => {
                      const blogTitle = blog.replace("blog/", "").replace(/-/g, " ");
                      const blogSlug = blog.replace("blog/", "");
                      
                      return (
                        <Link key={index} href={`/blog/${blogSlug}`} className="group">
                          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between border border-gray-100 group-hover:border-red-200">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-700 mb-3 capitalize">
                                {blogTitle}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                An article by {author.name}
                              </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <span className="text-red-600 group-hover:text-red-800 font-medium flex items-center text-sm">
                                Read article
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Author Not Found</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">We couldn't find the author you're looking for. They may have been removed or the URL might be incorrect.</p>
              <Link href="/authors" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md">
                View All Authors
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}