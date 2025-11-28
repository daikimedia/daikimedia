"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const MarketsWeServe = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const markets = [
    {
      id: 1,
      heading: "Malaysia – Kuala Lumpur Based Support",
      text: "Our home base. We help Malaysian brands build strong visibility on Google, social media and across the web. Ideal for clinics, SMEs, e-commerce and service businesses that want stable long term growth.",
      linkText: "View Malaysia focused services",
      linkUrl: "/",
    },
    {
      id: 2,
      heading: "Singapore – SEO And Digital Marketing For Competitive Niches",
      text: "Singapore is fast, intense and highly competitive. We help clinics, SMEs, iGaming and high ticket brands stand out with clear SEO, content and social media marketing strategies made for the Singapore market.",
      linkText: "Discover our Singapore SEO and digital marketing",
      linkUrl: "/singapore-marketing-agency",
    },
    {
      id: 3,
      heading: "Dubai and UAE – High Growth And High CPC Markets",
      text: "Dubai rewards bold brands. We support clinics, real estate, luxury and iGaming companies with SEO, digital campaigns and social media marketing that match the energy and expectations of the UAE audience.",
      linkText: "Explore our Dubai and UAE services",
      linkUrl: "/dubai-marketing-agency",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 dark:bg-dark-200 sm:overflow-hidden">
      <div className="container">
        <div className="mb-12">
          <div className="flex flex-col max-lg:text-center lg:flex gap-4 max-w-5xl mx-auto">
            <h2 className="text-center">Markets We Serve</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              DaikiMedia is built for brands that want to grow beyond one city.
              We understand how people search, click and make decisions in each
              market.
            </p>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Choose your region to see how we can support your growth.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          {/* Desktop Grid View */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-8"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}
          >
            {markets.map((market) => (
              <div
                key={market.id}
                className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark">
                  <h3 className="mb-4 text-xl font-semibold">{market.heading}</h3>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {market.text}
                  </p>
                  <Link
                    href={market.linkUrl}
                    className="inline-block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {market.linkText} →
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile/Tablet Swiper View */}
          <div className="lg:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
              }}
              className="swiper !pb-12 !px-2"
            >
              {markets.map((market) => (
                <SwiperSlide key={market.id}>
                  <div className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200 h-full">
                    <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                      <h3 className="mb-4 text-xl font-semibold">{market.heading}</h3>
                      <p className="mb-6 text-gray-700 dark:text-gray-300">
                        {market.text}
                      </p>
                      <Link
                        href={market.linkUrl}
                        className="inline-block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        {market.linkText} →
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;

