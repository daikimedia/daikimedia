import Footer from "@/components/footer/Footer";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import WhatIsDigitalMarketing from "../../../components/lear/digital-marketing/whatIsDigitalMarketing";


export const metadata = {
  title: "Digital Marketing | Daikai Media",
  description:
    "Explore the world of digital marketing with Daikai Media. Learn about strategies, tools, and techniques to elevate your brand's presence online.",
  keywords:
    "digital marketing, online marketing, digital marketing strategies, marketing tools, brand promotion, SEO, social media marketing",
};

const DigitalMarketingPage = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <section>
          <WhatIsDigitalMarketing />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingPage;
