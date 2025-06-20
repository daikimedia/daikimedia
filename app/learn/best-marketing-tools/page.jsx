import Footer from "@/components/footer/Footer";
import DigitalMarketingTools from "@/components/lear/best-digital-marketing-tools/bestMarketingTools";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";


export const metadata = {
  title: "Digital Marketing Tools | Daikai Media",
  description:
    "Explore a wide range of digital marketing tools offered by Daikai Media. Enhance your marketing strategies with top-tier tools for SEO, analytics, and more.",
  keywords:
    "best seo company",
      alternates: {
    canonical: "https://www.daikimedia.com/learn/best-marketing-tools",
  },
};

const DigitalMarketingToolsPage = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section>
          <DigitalMarketingTools />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingToolsPage;
