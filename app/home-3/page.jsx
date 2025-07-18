import Footer from "@/components/footer/Footer";
import AboutBanking from "@/components/home-3/AboutBanking";
import BankingDetails from "@/components/home-3/BankingDetails";
import Clients from "@/components/shared/Clients";
import Counter from "@/components/shared/Counter";
import Faq from "@/components/shared/Faq";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import PaymentFeatures from "@/components/shared/PaymentFeatures";
import Pricing from "@/components/shared/Pricing";
import TeamMembers from "@/components/shared/TeamMembers";
import BankingServices from "@/data/bankingService";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";

export const metadata = {
  title: "Banking",
  description:
    "Discover Daiki Media's banking services for seamless financial management.",
  keywords:
    "Daiki Media, banking services, secure banking, online banking, financial management",
};

const HomePage3 = () => {
  const { BankingServicesData } = BankingServices;
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="MONITOR YOUR MONEY"
          title="The future of business is being <br> shaped by Daiki Media"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <BankingDetails />
        <MembersCounter border={false} />
        <PaymentFeatures
          features={BankingServicesData}
          sectionTag={"Our Services"}
          sectionTitle={
            "Leading Brands Trust Daiki Media For Digital Excellence"
          }
          className={
            "relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
          }
        />
        <AboutBanking />
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          className={"pb-0 pt-0"}
        />
        <TeamMembers />
        <Counter />
        <Pricing />
        <Faq />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default HomePage3;
