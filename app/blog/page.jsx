import Head from "next/head";
import FeatureBlog from "@/components/blogs/FeatureBlog";
import RecentNews from "@/components/blogs/RecentNews";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export async function generateMetadata() {
  try {
    const res = await fetch("https://daiki.media/wp-json/wp/v2/posts", {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch metadata");
    }
    const metadata = await res.json();
    return {
      title: metadata[0]?.title?.rendered || "Blog | Daikai Media",
      description:
        metadata[0]?.excerpt?.rendered ||
        "Explore the latest blogs and articles from Daikai Media.",
      keywords: [
        "Daikai Media",
        "blogs",
        "media",
        "content",
        "articles",
        "updates",
      ],
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | Daikai Media",
      description: "Explore the latest blogs and articles from Daikai Media.",
      keywords: [
        "Daikai Media",
        "blogs",
        "media",
        "content",
        "articles",
        "updates",
      ],
    };
  }
}

export default async function Blog() {
  try {
    const metadataRes = await fetch("https://daiki.media/wp-json/wp/v2/posts", {
      next: { revalidate: 10 },
    });
    const metadata = metadataRes.ok ? await metadataRes.json() : [];

    return (
      <>
        <Head>
          <title>{metadata[0]?.title?.rendered || "Blog | Daikai Media"}</title>
          <meta
            name="description"
            content={
              metadata[0]?.excerpt?.rendered ||
              "Explore the latest blogs and articles from Daikai Media."
            }
          />
          <meta
            name="keywords"
            content="Daikai Media, blogs, media, content, articles, updates"
          />
        </Head>

        <PrimaryNavbar />
        <main>
          <PageHero
            subtitle="OUR BLOG"
            title="Recent Blogs <br/> By Daikai Media"
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
