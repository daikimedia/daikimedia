"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogSidebar = ({ search, setSearch }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const router = useRouter();

  // Fetch categories and tags from WordPress API
  useEffect(() => {
    fetch("https://daiki.media/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("https://daiki.media/wp-json/wp/v2/tags")
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error("Error fetching tags:", error));
  }, []);

  const handleCategoryClick = (categorySlug) => {
    setActiveCategory(categorySlug);
    setActiveTag(null);
    const encodedSlug = encodeURIComponent(categorySlug);
    router.push(`/categories/${encodedSlug}`);
  };

  const handleTagClick = (tagId) => {
    setActiveTag(tagId);
    setActiveCategory(null);
  };

  return (
    <div className="self-start max-lg:col-span-5 max-md:order-1 max-md:col-span-full lg:col-span-4">
      <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
        <div className="rounded border border-dashed border-gray-100 bg-white px-8 py-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-4">
          <div className="mb-12">
            <h3 className="mb-8">Search</h3>
            <label className="relative block">
              <input
                className="w-full rounded-[60px] border border-borderColor py-5 pl-12 pr-5 placeholder:font-jakarta_sans focus:border-primary focus:outline-none dark:border-borderColor-dark dark:bg-transparent"
                placeholder="Search..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-12">
            <h3 className="mb-3">Categories</h3>
            {categories.length === 0 ? (
              <p>No categories available.</p>
            ) : (
              categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`relative flex items-center justify-between py-5 w-full text-left font-medium ${
                    activeCategory === category.slug ? "bg-gray-200" : ""
                  }`}
                >
                  {category.name}
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              ))
            )}
          </div>
          <div>
            <h3 className="mb-8">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {tags.length === 0 ? (
                <p>No tags available.</p>
              ) : (
                tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={`btn-outline btn-sm ${
                      activeTag === tag.id ? "bg-primary text-white" : ""
                    }`}
                  >
                    {tag.name}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
