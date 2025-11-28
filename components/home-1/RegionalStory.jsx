"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const RegionalStory = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const ctaButtons = [
    {
      id: 1,
      text: "Explore Malaysia services",
      link: "/",
    },
    {
      id: 2,
      text: "Explore Singapore services",
      link: "/singapore-marketing-agency",
    },
    {
      id: 3,
      text: "Explore Dubai services",
      link: "/dubai-marketing-agency",
    },
  ];

  return (
    <section className="relative bg-white py-16 dark:bg-dark-300">
      <div className="container">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            From Kuala Lumpur to Singapore and Dubai
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Helping brands grow across Southeast Asia and the Middle East
          </p>
          <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              DaikiMedia started in Kuala Lumpur with one clear belief. Good
              strategy beats loud noise.
            </p>
            <p>Today we bring that same belief to Singapore and Dubai.</p>
            <p>
              We work with clinics, local businesses, real estate, iGaming and
              growing brands that want simple plans, honest communication and
              results they can feel.
            </p>
            <p>
              If your customers live in Malaysia, Singapore or the UAE, we are
              ready to help you reach them with a clear and focused digital
              strategy.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 max-sm:flex-col">
            {ctaButtons.map((button) => (
              <Link
                key={button.id}
                href={button.link}
                className="px-6 py-3 text-white bg-primary-600 rounded-medium hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalStory;

