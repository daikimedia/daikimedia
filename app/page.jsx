import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import Footer from "@/components/footer/Footer";
import Clients from "@/components/shared/Clients";
import Services from "@/components/shared/Services";
import Testimonial from "@/components/shared/Testimonial";
import Hero from "@/components/home-1/Hero";
import Cta from "@/components/home-1/Cta";

export const metadata = {
  title: "Digital Marketing Agency Kuala Lumpur | Search Engine Optimization and Digital Marketing | Seo Agencies | Daiki Media",
  description: "Daiki Media offers expert digital marketing, SEO, web development, UI/UX design, copywriting, and app development to elevate your business in KL, Malaysia.",
  keywords: "Digital marketing agency Kuala Lumpur , Search engine optimization and digital marketing, Best SEO agencies",
  og_title: "Digital Marketing Agency Kuala Lumpur | Search Engine Optimization and Digital Marketing | Seo Agencies | Daiki Media",
  og_description: "Daiki Media offers expert digital marketing, SEO, web development, UI/UX design, copywriting, and app development to elevate your business in KL, Malaysia.",
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
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold">Google and Meta Partner</h2>
            <p className="text-gray-600">
              We are proud partners with industry leaders like{" "}
              <a href="https://www.designrush.com" target="_blank" rel="noopener noreferrer">
                www.designrush.com
              </a>
              <br />Delivering cutting-edge solutions for your business.
            </p>
          </div>
          <img src="/images/partners.jpeg" alt="Google and Meta Partner" className="w-fit rounded-lg shadow-md" />
        </div>
        <Clients />
        <Services />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}