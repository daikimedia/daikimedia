import Footer from "@/components/footer/Footer";
import SeoCompany from "@/components/lear/seo-company/seoCompany";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "Top SEO Optimization Companies to Grow Your Business | Daiki Media",
  description:
    "Partner with top SEO optimization companies to boost search rankings, visibility, and online growth using proven strategies from Malaysia’s trusted agency, Daiki Media.",
  keywords:
    "seo optimization companies",
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
