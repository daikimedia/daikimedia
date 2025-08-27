import { MetadataRoute } from "next";

async function getBlogsFromAPI() {
  try {
    const response = await fetch("https://cms.daikimedia.com/api/blogs", {
      next: {
        revalidate: 3600,
        tags: ["blogs"],
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
    return [];
  }
}

async function getServiceRoutes() {
  try {
    const serviceData = await import("../data/singleServiceData.json");
    const { SingleServiceData } = serviceData.default || {
      SingleServiceData: [],
    };
    return SingleServiceData.map((service) => ({
      slug: service.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error importing service data:", error);
    return [];
  }
}

async function getAuthorRoutes() {
  try {
    const authorData = await import("../data/singleAuthor.json");
    const authors = Array.isArray(authorData.default)
      ? authorData.default
      : [authorData.default];
    return authors.map((author) => ({
      slug: author.slug || author.id,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error importing author data:", error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = "https://www.daikimedia.com";
  const date = new Date();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: date,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: date,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: date,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/our-seo-results`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-is-seo-company`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/who-is-best-seo-company`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-guide-for-managers`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-marketing-tools`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const apiBlogs = await getBlogsFromAPI();

  const blogRoutes = apiBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updated_at || blog.date || date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const services = await getServiceRoutes();
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: service.lastModified,
    changeFrequency: service.changeFrequency,
    priority: service.priority,
  }));

  const authors = await getAuthorRoutes();
  const authorRoutes = authors.map((author) => ({
    url: `${baseUrl}/author/${author.slug}`,
    lastModified: author.lastModified,
    changeFrequency: author.changeFrequency,
    priority: author.priority,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...authorRoutes];
}
