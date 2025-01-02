import Head from "next/head";
import FeatureBlog from "@/components/blogs/FeatureBlog";
import RecentNews from "@/components/blogs/RecentNews";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import getMarkDownData from "@/utils/getMarkDownData";

export default async function Blog() {
  const metadataRes = await fetch("https://daikimedia.com/wp-json/wp/v2/posts");
  const metadata = await metadataRes.json();

  const blogs = getMarkDownData("content/blogs");

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
        <FeatureBlog featureBlog={blogs} />
        <RecentNews blogItemData={blogs} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
