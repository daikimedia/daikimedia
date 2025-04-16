"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeFromLeftAnimation } from "@/data/animation";
import Image from "next/image";

import heroCircleLight from "../../public/images/hero/testimg.jpg";
import heroCircleLightMobile from "../../public/images/hero/testimg-mobile.jpg";

import FadeUpAnimation from "../animations/FadeUpAnimation";

const HeroContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // Run on mount
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4">
          5k+ Trusted Businesses
        </p>
        <h1 className="mb-12 max-md:mb-8">
          Grow Your Revenue
          <span className="inline-block rounded-[88px] border-2 border-paragraph bg-[#D9D9D900] px-5 pb-2.5 pt-0.5 font-playfair italic leading-none dark:border-[#F0F3EA]">
            with SEO & Digital
          </span>
          Marketing Services.
        </h1>
        <p className="mb-8 max-w-[590px] max-md:mb-8">
          Partner with a results-driven digital agency that delivers measurable
          impact for forward-thinking businesses. From strategy to execution, we
          transform ideas into digital success stories.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=601114850067"
          target="_blank"
          className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4 "
        >
          Get Started
        </a>
      </div>

      <div className="col-span-12 md:col-span-6">
        <motion.div
          variants={fadeFromLeftAnimation}
          initial="initial"
          animate="animate"
          className="relative md:min-h-[530px] w-full max-md:min-h-[400px]"
        >
          <div className="absolute">
            <Image
              src={isMobile ? heroCircleLightMobile : heroCircleLight}
              alt="Hero Image"
              className="h-full w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </FadeUpAnimation>
  );
};

export default HeroContent;
