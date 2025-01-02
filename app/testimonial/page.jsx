import Footer from "@/components/footer/Footer";
import SecondaryNavbar from "@/components/navbar/SecondaryNavbar";
import Clients from "@/components/shared/Clients";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import Pricing from "@/components/shared/Pricing";
import TestimonialSingle from "@/components/testimonial/TestimonialSingle";

export const metadata = {
  title: "Testimonials | Daikai Media",
  description: "Discover the success stories and feedback from our clients. Learn how Daikai Media's innovative media solutions have helped businesses and content creators thrive.",
  keywords: "Testimonials, Daikai Media, client feedback, reviews, success stories, media solutions, satisfied clients, content creators, business growth",
  author: "Daikai Media Team",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://daikimedia.com/testimonials",
    title: "Testimonials | Daikai Media",
    description: "Hear from our clients about how Daikai Media helped their business grow and succeed. Real reviews and success stories.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@daikimedia", 
    title: "Testimonials | Daikai Media",
    description: "Read real success stories from our clients and partners.",
  },
};


const Testimonial = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero
          title="What our customer’s say <br/> about our company"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <TestimonialSingle />
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          className={"pb-0 pt-0"}
        />
        <Pricing className={"pt-150 max-md:pt-20"} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Testimonial;
