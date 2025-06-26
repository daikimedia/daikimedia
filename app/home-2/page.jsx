import Footer from "@/components/footer/Footer";
import Blog from "@/components/home-2/Blog";
import CoreFeature from "@/components/home-2/CoreFeature";
import Hero from "@/components/home-2/Hero";
import Rating from "@/components/home-2/Rating";
import WhyUs from "@/components/home-2/WhyUs";
import CallToAction from "@/components/shared/CallToAction";
import Clients from "@/components/shared/Clients";
import MembersCounter from "@/components/shared/MembersCounter";
import PaymentFeatures from "@/components/shared/PaymentFeatures";
import Pricing from "@/components/shared/Pricing";
import PaymentFeaturesList from "@/data/paymentFeaturesData";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "Payment",
  description: "Explore payment solutions and services offered by Daiki Media.",
  keywords: "Daiki Media, payment solutions, secure payments, online payment, financial services",
};

const HomePage2 = () => {
  const { PaymentFeaturesData } = PaymentFeaturesList;
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Rating />
        <CoreFeature />
        <WhyUs />
        <PaymentFeatures
          features={PaymentFeaturesData}
          sectionTag="MORE FEATURES"
          sectionTitle="Managing your money has never been easier"
          className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
        />
        <MembersCounter />
        <Pricing />
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          className={"pb-0 pt-0"}
        />
        <Blog />
        <CallToAction title="Start your best payment experience now!" />
      </main>
      <Footer />
    </>
  );
};

export default HomePage2;
