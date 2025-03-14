import Footer from "@/components/footer/Footer";
import BestSeo from "@/components/lear/best-seo-company/bestSeo";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "SEO Company | Daikai Media",
  description:
    "Partner with Daikai Media, your trusted SEO company, to boost your website's search engine rankings and drive organic traffic. Our tailored SEO strategies help you achieve long-term success.",
  keywords:
    "SEO company, SEO services, search engine optimization, organic traffic, SEO strategies, digital marketing, SEO experts",
  author: "Daikai Media Team",
};

const BestSeoCompany = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section>
          <BestSeo />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BestSeoCompany;
