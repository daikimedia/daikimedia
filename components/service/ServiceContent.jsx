import PageHero from "@/components/shared/PageHero";
import { CallToAction } from "@/components/service-single/callToAction";
import { CardsSection } from "@/components/service-single/cardsSection";
import { InfoStatsSection } from "@/components/service-single/infoStatsSection";
import { ServiceInclude } from "@/components/service-single/servicesInclude";
import { Comparison } from "@/components/service-single/comparison";
import { AdditionalInfo } from "@/components/service-single/additionalInfo";
import { ServiceProcess } from "@/components/service-single/serviceProcess";
import { FaqSection } from "@/components/service-single/faqSection";
import Clients from "@/components/shared/Clients";

const ServiceContent = ({ data }) => {
  return (
    <>
      <section>
        <PageHero
          subtitle={data.subTitle}
          title={data.heroSection.title}
          paragraph={data.heroSection.description}
          link={data.heroSection.link}
        />

        <ServiceInclude data={data.servicesInclude} />

        <InfoStatsSection data={data.infoStatsSection} />

        <Clients />

        <CardsSection data={data.cardsSection} />

        <CallToAction data={data.ctaSection} />

        <Comparison data={data.comparison} />

        <ServiceProcess data={data.serviceProcess} />

        <AdditionalInfo data={data.additionalInfo} />

        <FaqSection data={data.faqSection} />

        {/* Conclusion */}
        <section>
          <div className="mb-[100px] text-center">
            <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
            <h2 className="mb-10 max-lg:mb-10">
              {data.conclusionSection.title}
            </h2>
            <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
              {data.conclusionSection.description}
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServiceContent;
