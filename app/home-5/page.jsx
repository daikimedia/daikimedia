import Footer from "@/components/footer/Footer";
import ServiceCardWithLeftText from "@/components/home-4/ServiceCardWithLeftText";
import EasyStepFeature from "@/components/home-5/EasyStepFeature";
import Hero from "@/components/home-5/Hero";
import HostingFeature from "@/components/home-5/HostingFeature";
import TrustedCompany from "@/components/home-5/TrustedCompany";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import FinancialBlog from "@/components/shared/FinancialBlog";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import Testimonial from "@/components/shared/Testimonial";

export const metadata = {
  title: "Hosting",
  description: "Find out about Daiki Media's reliable hosting services for websites and applications.",
  keywords: "Daiki Media, hosting services, website hosting, cloud hosting, web services",
};
export default function HomePage5() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <TrustedCompany />
        <HostingFeature />
        <Pricing />
        <ServiceCardWithLeftText />
        <Testimonial />
        <EasyStepFeature />
        <FinancialBlog className="pt-150 dark:bg-dark-300" />
        <div className="pt-150">
          <NewsLetter />
        </div>
      </main>
      <Footer />
    </>
  );
}
