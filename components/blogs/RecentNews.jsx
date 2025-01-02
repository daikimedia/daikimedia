'use client'
import { useState, useEffect } from 'react'
import Pagination from '../shared/Pagination'
import BlogItems from './BlogItems'

const RecentNews = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [featureBlog, setFeatureBlog] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 12
  const totalPage = Math.ceil(featureBlog.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return featureBlog.slice(startIndex, endIndex)
  }

  const currentPageData = paginateData()

  const goToNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  }

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://daikimedia.com/wp-json/wp/v2/posts?page=1&per_page=100"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch blog data")
      }
      const data = await response.json()

      setFeatureBlog(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching blog data:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <section className="relative py-150 max-md:py-20">
      <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative mb-16">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline text-gray-900">Stay updated with the latest trends, news, and insights from the world of Daikai Media.</p>
          <h2 className="text-2xl font-semibold text-gray-900">Our Recent News & Insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-60 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-lg text-gray-600">Loading...</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              {currentPageData.map((blog) => (
                <BlogItems
                  key={blog.id}
                  id={blog.id}
                  slug={blog.slug}
                  blogData={blog}
                  content={blog.content}
                  date={blog.date}
                  thumbnail={blog?.yoast_head_json?.og_image?.[0]?.url}
                  status={blog.categories}
                  title={blog.title?.rendered || 'Untitled'}
                  column={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  )
}

export default RecentNews
