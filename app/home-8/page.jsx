import Footer from "@/components/footer/Footer";
import GetStart from "@/components/home-8/GetStart";
import Hero from "@/components/home-8/Hero";
import Integration from "@/components/home-8/Integration";
import RobustFeatures from "@/components/home-8/RubustFeature";
import Steps from "@/components/home-8/Steps";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import NewsLetterV2 from "@/components/shared/NewsLetterV2";
import Pricing from "@/components/shared/Pricing";
import Testimonial from "@/components/shared/Testimonial";

const HomePage8 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <GetStart />
        <Steps />
        <RobustFeatures />
        <Pricing />
        <Integration />
        <Testimonial />
        <NewsLetterV2 />
      </main>
      <Footer />
    </>
  );
};

export default HomePage8;
