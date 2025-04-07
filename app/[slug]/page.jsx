import Footer from "@/components/footer/Footer";
import ServiceContent from "@/components/service/ServiceContent";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import ServiceList from "@/data/singleServiceData";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export async function generateMetadata({ params }) {
  if (!params) return {}; 
  const slug = params.slug; 

  const { SingleServiceData } = ServiceList;
  const data = SingleServiceData.find((post) => post.slug === slug);

  const meta = {
    title: data?.metaTitle || "Default Title",
    description: data?.metaDescription || "Default Description",
  };

  // ✅ Add canonical if slug exists
  if (data?.slug) {
    meta.alternates = {
      canonical: `https://www.daikimedia.com/${data.slug}`,
    };
  }

  // ✅ Add keywords if present
  if (data?.keyword) {
    meta.keywords = data.keyword;
  }

  // ✅ Optional: log to terminal for debugging
  console.log("Generated Metadata for:", slug, meta);

  return meta;
}

export async function generateStaticParams() {
  const { SingleServiceData } = ServiceList;
  return SingleServiceData.map((item) => ({
    slug: item.slug,
  }));
}

const ServiceDetails = ({ params }) => {
  const { SingleServiceData } = ServiceList;
  const slug = params?.slug; 
  const data = SingleServiceData.find((post) => post.slug === slug);

  return (
    <>
      <PrimaryNavbar />
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
