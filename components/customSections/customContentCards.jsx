"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    id: 1,
    title: "Industry Experts Keep You Competitive",
    description:
      "Stay ahead in a rapidly changing market. Our specialists conduct ongoing research and bring valuable insights to help you make informed decisions that drive long-term success.",
  },
  {
    id: 2,
    title: "Strategic Specialists Dedicated to Growth",
    description:
      "We focus on sustainable growth strategies, setting up campaigns and technology that adapt and scale with your business.",
  },
  {
    id: 3,
    title: "Channel-Specific Innovators for Every Need",
    description:
      "Our specialists in SEO, PPC, content marketing, and UX/UI design work collaboratively to deliver forward-thinking ideas, ensuring every dollar you spend has an impact.",
  },
  {
    id: 4,
    title: "Proven Results and Growth-Driven Metrics",
    description:
      "At Daiki Media, we focus on the key performance indicators (KPIs) that matter most. Each client engagement is backed by measurable metrics to guarantee we’re hitting the targets that drive real growth.",
  },
  {
    id: 5,
    title: "Boost Traffic, Visibility, and Brand Awareness",
    description:
      "Increase your digital presence and get more eyes on your business. Our SEO services improve your website’s search engine ranking, driving high-quality traffic that converts. Whether you’re a new business or an established brand, we’ll help you capture your market.",
  },
  {
    id: 65,
    title: "Accelerate Lead Generation with Tailored Solutions",
    description:
      "Bring in qualified leads and nurture them to conversion. Our marketing plans include advanced lead generation tactics designed specifically for your industry, using a combination of SEO, content marketing, and paid ads to reach high-intent audiences.",
  },
];




const ContentCards = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <section className="relative bg-white py-32 dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
      <div className="container">
        <div className="mb-12">
          <div className="flex flex-col max-lg:text-center lg:flex gap-4 max-w-5xl mx-auto">
            <h2 className="text-center">
              Customized Omnichannel Solutions Tailored to You
            </h2>
            <p className="text-center">
              With a data-first approach, Daiki Media provides tailored
              marketing plans to amplify your revenue. Our experts are at the
              forefront of their fields, continually refining their skills to
              bring fresh, innovative solutions that resonate with your audience
              and align with your business objectives.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <>
            <motion.div
              className="grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
              ref={ref}
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}
            >
              {data.map((items) => (
                <div
                  className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                  key={items.id}
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                    <h3 className="mb-2.5">{items.title}</h3>
                    <p className="mb-6">{items.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
