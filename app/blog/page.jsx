import Head from "next/head";
import FeatureBlog from "@/components/blogs/FeatureBlog";
import RecentNews from "@/components/blogs/RecentNews";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";

export default async function Blog() {
  try {
    const res = await fetch("https://daiki.media/wp-json/wp/v2/posts", {
      next: { revalidate: 10 },
    });
    const metadata = res.ok ? await res.json() : [];

    const firstPost = metadata[0] || {};

    return (
      <>
        <Head>
          <title>{firstPost?.title?.rendered || "Blog | Daiki Media"}</title>
          <meta
            name="description"
            content={
              firstPost?.excerpt?.rendered?.replace(/<[^>]+>/g, "") ||
              "Explore the latest blogs and articles from Daiki Media."
            }
          />
          <meta
            name="keywords"
            content="Daiki Media, blogs, media, content, articles, updates"
          />
        </Head>

        <main>
          <PageHero
            subtitle="OUR BLOG"
            title="Recent Blogs <br/> By Daiki Media"
          />
          <FeatureBlog />
          <RecentNews />
          <NewsLetter />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error rendering blog page:", error);
    return (
      <div>
        <h1>Error Loading Blogs</h1>
        <p>
          Sorry, we couldn&apos;t load the blog content. Please try again later.
        </p>
      </div>
    );
  }
}
