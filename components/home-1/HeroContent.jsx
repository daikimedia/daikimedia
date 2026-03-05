"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeFromLeftAnimation } from "@/data/animation";
import Image from "next/image";
import dynamic from "next/dynamic";

// Fixed dynamic import
const FadeUpAnimation = dynamic(() => import("../animations/FadeUpAnimation"), { 
  ssr: false,
  loading: () => null // Just return null while loading
});

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use matchMedia for better performance
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mediaQuery.matches);
    
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  // Single image source based on device
  const imageSrc = isMobile 
    ? "/images/hero/testimg-mobile.avif"
    : "/images/hero/testimg.avif";
  
  const imageDimensions = isMobile
    ? { width: 375, height: 500 }
    : { width: 600, height: 800 };

  return (
    <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4">
          5k+ Trusted Businesses
        </p>
        <h1 className="mb-4 max-md:mb-8">
          Grow Your Revenue{" "}
          <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-1 font-playfair italic leading-none dark:border-[#F0F3EA]">
            with SEO & Digital
          </span>{" "}
          Marketing Services.
        </h1>
        <p className="mb-4 max-w-[590px] max-md:mb-8">
          Partner with a results-driven digital agency that delivers measurable
          impact for forward-thinking businesses. From strategy to execution, we
          transform ideas into digital success stories.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=601114850067"
          target="_blank"
          rel="noopener noreferrer"
          className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4"
        >
          Get Started
        </a>
      </div>

      <div className="col-span-12 md:col-span-6 flex items-center justify-center">
        <motion.div
          variants={fadeFromLeftAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative md:min-h-[530px] w-full max-md:min-h-[400px] flex items-center justify-center"
        >
          <Image
            src={imageSrc}
            alt="Illustration representing SEO and digital marketing growth"
            width={imageDimensions.width}
            height={imageDimensions.height}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </FadeUpAnimation>
  );
};

export default HeroContent;