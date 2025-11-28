"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

const WhoWeHelp = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const helpSections = [
    {
      id: 1,
      heading: "Aesthetic Clinics That Need Trust And Steady Leads",
      text: "From Kuala Lumpur to Singapore and Dubai, aesthetic clinics need one thing first. Trust. We create search friendly pages, lead focused funnels and social content that makes patients feel safe, informed and ready to book.",
      microLine: "Ideal for: aesthetic clinics, skin clinics, medical practices",
    },
    {
      id: 2,
      heading: "Local Service Businesses And SMEs",
      text: "We help local brands show up on Google, appear on Google Maps and get found when people search things like near me or best in my area. Perfect for salons, tuition centres, home services and growing SMEs across all three regions.",
      microLine: "Ideal for: SMEs, local services, retail, home based businesses",
    },
    {
      id: 3,
      heading: "iGaming And High Competition Brands That Need Smart Strategy",
      text: "Some industries move faster than others. iGaming and other high CPC niches need careful strategy, safe promotion and sharp SEO. We support these brands with technical work, conversion focused content and performance tracking tuned for Singapore and Dubai.",
      microLine: "Ideal for: iGaming, finance, high CPC brands",
    },
  ];

  return (
    <section className="relative bg-white py-16 dark:bg-dark-300 sm:overflow-hidden">
      <div className="container">
        <div className="mb-12">
          <div className="flex flex-col max-lg:text-center lg:flex gap-4 max-w-5xl mx-auto">
            <h2 className="text-center">
              Who We Help Across Malaysia, Singapore And Dubai
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Every city has its own rhythm. Every market has its own pressure.
              We shape our strategy around the reality of your region and your
              industry.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <motion.div
            className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}
          >
            {helpSections.map((section) => (
              <div
                key={section.id}
                className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-4 text-xl font-semibold">
                    {section.heading}
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {section.text}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {section.microLine}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

