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
        <div className="py-16 flex flex-wrap items-center justify-center gap-8 px-4 max-lg:flex-col">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold">Google and Meta Partner</h2>
            <p className="text-gray-600">
              We are proud partners with industry leaders like{" "}
              <a
                href="https://www.designrush.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.designrush.com
              </a>
              <br />
              Delivering cutting-edge solutions for your business.
            </p>
          </div>

          {/* Image Section */}
          <div className="">
            <img
              src="/images/partners.jpeg"
              alt="Google and Meta Partner"
              className="w-fit rounded-lg shadow-md"
            />
          </div>
        </div>
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
