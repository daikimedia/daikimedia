"use client";
import { useState } from "react";
import {
  CheckCircle,
  TrendingUp,
  Phone,
  Search,
  Star,
  ArrowUp,
  Users,
  Target,
  Award,
  Heart,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PaymentFeatures from "@/components/shared/PaymentFeatures";
import { ServiceProcess } from "@/components/service-single/serviceProcess";
import FaqItem from "@/components/shared/FaqItem";
import { ServiceInclude } from "@/components/service-single/servicesInclude";

// Icon mapping
const iconMap = {
  CheckCircle,
  TrendingUp,
  Phone,
  Search,
  Star,
  ArrowUp,
  Users,
  Target,
  Award,
  Heart,
};

const MarketingAgencyContent = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <PageHero
          subtitle={data.hero.subtitle}
          title={data.hero.title}
          paragraph={data.hero.description}
        />
        {data.hero.ctaText && (
          <div className="container mb-8 text-center">
            <p className="text-lg font-semibold mb-2">{data.hero.ctaText}</p>
            <p className="text-paragraph-light">{data.hero.ctaDescription}</p>
          </div>
        )}
      </section>

      {/* Why Choose Section */}
      {data.whyChoose && (
        <section className="relative bg-white py-20 dark:bg-dark-300 max-md:py-12">
          <div className="container">
            <div className="mx-auto mb-8 max-w-[575px] text-center">
              <h2 className="mb-3">{data.whyChoose.title}</h2>
              <p className="text-paragraph-light mb-6">{data.whyChoose.description}</p>
            </div>
            <PaymentFeatures
              sectionTag=""
              sectionTitle=""
              features={data.whyChoose.features}
              className="bg-transparent pb-0 pt-0"
            />
            {data.whyChoose.closingNote && (
              <div className="mt-8 text-center">
                <p className="text-paragraph-light max-w-3xl mx-auto">{data.whyChoose.closingNote}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SEO Services Section */}
      {data.seoServices && (
        <section className="relative bg-white py-20 dark:bg-dark-300 max-md:py-12">
          <div className="container">
            <div className="mx-auto mb-8 max-w-[575px] text-center">
              <h2 className="mb-3">{data.seoServices.title}</h2>
              <p className="text-paragraph-light">{data.seoServices.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {data.seoServices.services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark max-lg:p-5">
                    <h3 className="mb-2.5">{service.title}</h3>
                    <p className="text-paragraph-light">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media Section */}
      {data.socialMedia && (
        <section className="relative bg-white py-20 dark:bg-dark-300 max-md:py-12">
          <div className="container">
            <div className="mx-auto mb-8 max-w-[575px] text-center">
              <h2 className="mb-3">{data.socialMedia.title}</h2>
              <p className="text-paragraph-light mb-6">{data.socialMedia.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {data.socialMedia.services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-5 dark:border-borderColor-dark">
                    <div className="flex items-start">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mr-3 mt-1 shrink-0"
                      >
                        <path
                          d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                          stroke=""
                          className="stroke-paragraph dark:stroke-primary"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-paragraph-light">{service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {data.socialMedia.goal && (
              <div className="mt-6 text-center">
                <p className="text-paragraph-light max-w-3xl mx-auto">{data.socialMedia.goal}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Industries Section */}
      {data.industries && (
        <ServiceInclude
          sectionTag="Core Service"
          sectionTitle={data.industries.title}
          data={data.industries.industries.map((industry) => ({
            id: industry.id,
            title: industry.title,
            description: industry.description,
            services: industry.services || [],
            servicesLabel: industry.servicesLabel || "We create:",
            benefit: industry.benefit,
          }))}
        />
      )}

      {/* Process Section */}
      {data.process && (
        <ServiceProcess data={data.process.steps.map((step) => ({
          title: step.title,
          desc: step.desc
        }))} />
      )}

      {/* Case Studies Section */}
      {data.caseStudies && (
        <section className="relative bg-white py-20 dark:bg-dark-300 max-md:py-12">
          <div className="container">
            <div className="mx-auto mb-8 max-w-[575px] text-center">
              <h2 className="mb-3">{data.caseStudies.title}</h2>
              <p className="text-paragraph-light mb-6">{data.caseStudies.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {data.caseStudies.results.map((result, index) => {
                const resultText = typeof result === "string" ? result : result.text;
                const iconName = typeof result === "object" && result.icon ? result.icon : "CheckCircle";
                const IconComponent = iconMap[iconName] || CheckCircle;
                
                return (
                  <div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
                  >
                    <div className="h-full rounded border border-dashed border-gray-100 p-6 text-center dark:border-borderColor-dark">
                      <IconComponent className="mx-auto mb-3 h-10 w-10 text-primary" />
                      <p className="text-paragraph-light">{resultText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {data.caseStudies.note && (
              <div className="mt-6 text-center">
                <p className="text-paragraph-light max-w-3xl mx-auto">{data.caseStudies.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {data.pricing && (
        <section className="relative bg-white py-20 dark:bg-dark-300 max-md:py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4">{data.pricing.title}</h2>
              <div className="whitespace-pre-line text-paragraph-light">
                {data.pricing.description}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && (
        <section className="relative pb-20 max-md:overflow-hidden max-md:pb-12">
          <div className="container relative">
            <div className="mx-auto max-w-[830px]">
              <div className="text-center mb-8">
                <p className="section-tagline mb-3">FAQ's</p>
                <h2 className="mb-8">{data.faq.title}</h2>
              </div>
              <div className="space-y-4">
                {data.faq.questions.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  );
};

export default MarketingAgencyContent;

