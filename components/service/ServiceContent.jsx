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
import Services from "@/components/shared/Services";

const ServiceContent = ({ data = {} }) => {
  return (
    <>
      <section>
        <PageHero
          subtitle={data?.subTitle || "Default Subtitle"}
          title={data?.heroSection?.title || "Default Title"}
          paragraph={data?.heroSection?.description || "Default Description"}
          link={data?.heroSection?.link || "#"}
        />

        {data?.servicesInclude && <ServiceInclude data={data.servicesInclude} sectionTitle={data?.servicesIncludeTitle || "What Our SEO Services Include"} />}
        {data?.infoStatsSection && <InfoStatsSection data={data.infoStatsSection} />}

        <Clients 
          title={data?.clientsSection?.title}
          description={data?.clientsSection?.description}
        />

        {data?.servicesSection && (
          <Services 
            title={data.servicesSection.title}
            description={data.servicesSection.description}
          />
        )}
        {data?.cardsSection && <CardsSection data={data.cardsSection} />}
        {data?.ctaSection && <CallToAction data={data.ctaSection} />}
        {data?.comparison && <Comparison data={data.comparison} />}
        {data?.serviceProcess && <ServiceProcess data={data.serviceProcess} />}
        {data?.additionalInfo && <AdditionalInfo data={data.additionalInfo} />}
        {data?.faqSection && <FaqSection data={data.faqSection} heading={data?.faqSectionHeading} />}

        {data?.conclusionSection && (
          <section>
            <div className="mb-[100px] text-center">
              <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
              <h2 className="mb-10 max-lg:mb-10">
                {data.conclusionSection?.title || "Default Conclusion Title"}
              </h2>
              <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
                {data.conclusionSection?.description || "Default Conclusion Description"}
              </p>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default ServiceContent;
