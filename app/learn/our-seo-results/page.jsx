import Footer from "@/components/footer/Footer";
import SeoResult from "@/components/lear/our-seo-result/our-seo-result";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";


export const metadata = {
  title: "Our SEO Result | Daikai Media",
  description:
    "Discover the impressive SEO results achieved by Daikai Media. Learn how our tailored SEO strategies have driven success for businesses across various industries.",
  keywords:
    "SEO results, Daikai Media, SEO strategies, business growth, search engine optimization, digital marketing",
        alternates: {
    canonical: "https://www.daikimedia.com/learn/our-seo-results",
  },
};

const OurSeoResult = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section>
          <SeoResult />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurSeoResult;
