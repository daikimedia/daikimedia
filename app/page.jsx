import Footer from "@/components/footer/Footer";
import Cta from "@/components/home-1/Cta";
import Faq from "@/components/home-1/Faq";
import Hero from "@/components/home-1/Hero";
import Integration from "@/components/home-1/Integration";
import Solution from "@/components/home-1/Solution";
import Vision from "@/components/home-1/Vision";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import Clients from "@/components/shared/Clients";
import Counter from "@/components/shared/Counter";
import FinancialBlog from "@/components/shared/FinancialBlog";
import Services from "@/components/shared/Services";
import Testimonial from "@/components/shared/Testimonial";
import CustomSectionOne from "@/components/customSections/customSectionOne";
import ContentCards from "@/components/customSections/customContentCards";
import ComprehensiveServicesShowcase from "@/components/customSections/comprehensiveServicesShowcase";
export const metadata = {
  title: "Daiki Media | Expert Digital Marketing & SEO Services in Malaysia",
  description:
    "Daiki Media offers expert digital marketing, SEO, web development, UI/UX design, copywriting, and app development to elevate your business in KL, Malaysia.",
  keywords:
    "digital marketing, SEO, web development, UI/UX design, copywriting, app development, KL, Malaysia",
  og_title: "Daiki Media | Expert Digital Marketing & SEO Services in Malaysia",
  og_description:
    "Daiki Media offers expert digital marketing, SEO, web development, UI/UX design, copywriting, and app development to elevate your business in KL, Malaysia.",
  og_image: "https://daikimedia.com/images/logo.png",
  og_url: "https://daikimedia.com",
  og_type: "website",
  og_site_name: "Daiki Media",
  og_locale: "en_US",
};

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Counter />
        <Vision />
        <Solution />
        <Integration />
        <CustomSectionOne />
        <ContentCards />
        <ComprehensiveServicesShowcase />
        <Testimonial />
        <Faq />
        <Cta />
        <FinancialBlog />
      </main>

      <Footer />
    </>
  );
}
