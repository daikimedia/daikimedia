"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const reasons = [
    "We speak in simple clear words not confusing jargon",
    "We design strategies that respect your budget and timeline",
    "We understand how Malaysia, Singapore and Dubai search behaviour is different",
    "We care about long term relationships more than quick wins",
  ];

  return (
    <section className="relative bg-gray-50 py-16 dark:bg-dark-200 sm:overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">
            Why Regional Brands Choose DaikiMedia
          </h2>
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-medium bg-white shadow-sm dark:bg-dark-300"
              >
                <span className="flex-shrink-0 w-6 h-6 mt-1 text-primary-600 dark:text-primary-400">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

