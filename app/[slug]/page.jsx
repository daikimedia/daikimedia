import Footer from "@/components/footer/Footer";
import ServiceContent from "@/components/service/ServiceContent";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import ServiceList from "@/data/singleServiceData";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const { SingleServiceData } = ServiceList;
  const data = SingleServiceData.find((post) => post.slug === slug);

  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
  };
}

export async function generateStaticParams() {
  const { SingleServiceData } = ServiceList;
  return SingleServiceData.map((item) => ({
    slug: item.slug,
  }));
}

const ServiceDetails = (props) => {
  const { SingleServiceData } = ServiceList;
  // console.log(SingleServiceData);
  const slug = props.params.slug;
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
