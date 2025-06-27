import Footer from "@/components/footer/Footer";
import SeoCompany from "@/components/lear/seo-company/seoCompany";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "SEO Optimization Companies | Expert SEO Services for Business | Daiki Media",
  description:
    "Partner with Daiki Media, your trusted SEO company, to boost your website's search engine rankings and drive organic traffic. Our tailored SEO strategies help you achieve long-term success.",
  keywords:
    "SEO company, SEO services, search engine optimization, organic traffic, SEO strategies, digital marketing, SEO experts",
  alternates: {
    canonical: "https://www.daikimedia.com/learn/what-is-seo-company",
  },
};

const SeoCompanyPage = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section>
          <SeoCompany />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoCompanyPage;
