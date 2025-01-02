import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/shared/ContactForm";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Daikai Media for inquiries, partnerships, or any questions you may have.",
  keywords: "contact, Daikai Media contact, media inquiries, reach us",
};

const page = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="GET IN TOUCH"
          title="Let's Transform Your Digital Vision Into Reality"
          paragraph="Reach out to discuss how we can help drive your business growth through strategic digital solutions."
        />
        <ContactInfo />
        <ContactForm />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default page;
