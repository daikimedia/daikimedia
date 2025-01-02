'use client'
import { useState,useEffect } from 'react'
import Pagination from '../shared/Pagination'
import BlogItems from './BlogItems'

const BlogList = ({ blogItemData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 1
  const totalPage = Math.ceil(blogItemData.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return blogItemData.slice(startIndex, endIndex)
  }

  const currentPageData = paginateData()
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  }
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://daikimedia.com/wp-json/wp/v2/posts?page=1&per_page=10'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!currentPageData.length) {
    return (
      <div className="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8">
        <h2 className="text-center">No Blog Found</h2>
      </div>
    )
  }
  return (

    <div className="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8">
      {currentPageData.map((blog) => (
        <BlogItems key={blog.slug} slug={blog.slug} content={blog.content} blogData={blog.data} column={true} />
      ))}
      <Pagination paginateFunction={paginateFunction} />

    </div>
  )
}

export default BlogList
