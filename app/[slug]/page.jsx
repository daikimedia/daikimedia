import Head from "next/head";
import Footer from "@/components/footer/Footer";
import ServiceContent from "@/components/service/ServiceContent";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import ServiceList from "@/data/singleServiceData";
import ServiceSchema from "@/components/schema/ServicesSchema";

export async function generateMetadata({ params }) {
  if (!params) return {};
  const { slug } = await params;

  const { SingleServiceData } = ServiceList;
  const data = SingleServiceData.find((post) => post.slug === slug);

  const meta = {
    title: data?.metaTitle || "Default Title",
    description: data?.metaDescription || "Default Description",
  };

  meta.alternates = {
    canonical: data?.canonicalUrl || `https://www.daikimedia.com/${data.slug}`,
  };

  if (data?.keyword) {
    meta.keywords = data.keyword;
  }

  return meta;
}

export async function generateStaticParams() {
  const { SingleServiceData } = ServiceList;
  return SingleServiceData.map((item) => ({
    slug: item.slug,
  }));
}

const ServiceDetails = async ({ params }) => {
  const { SingleServiceData } = ServiceList;
  const { slug } = await params;
  const data = SingleServiceData.find((post) => post.slug === slug);

  return (
    <>
      <Head>
        <ServiceSchema data={data} />
      </Head>

      <main>
        <ServiceContent data={data} />
        <MembersCounter />
        <Pricing className={"pt-150 max-md:pt-20"} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetails;
