"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeFromLeftAnimation } from "@/data/animation";
import Image from "next/image";
import dynamic from "next/dynamic";

const FadeUpAnimation = dynamic(() => import("../animations/FadeUpAnimation"), { 
  ssr: false,
  loading: () => <>{children}</> 
});

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < breakpoint);
    });
    
    const handleResize = () => {
      requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < breakpoint);
      });
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  const imageConfig = {
    width: 600,
    height: 800,
    mobileWidth: 375,
    mobileHeight: 500,
    src: "/images/hero/testimg.avif",
    mobileSrc: "/images/hero/testimg-mobile.avif"
  };

  return (
    <div className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          5k+ Trusted Businesses
        </p>
        <h1 className="mb-4 max-md:mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          Grow Your Revenue{" "}
          <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-1 font-playfair italic leading-none dark:border-[#F0F3EA]">
            with SEO & Digital
          </span>{" "}
          Marketing Services.
        </h1>
        <p className="mb-4 max-w-[590px] max-md:mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
        <div className="relative md:min-h-[530px] w-full max-md:min-h-[400px] flex items-center justify-center">
          <Image
            src={imageConfig.src}
            alt="Illustration representing SEO and digital marketing growth"
            width={imageConfig.width}
            height={imageConfig.height}
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            className="rounded-2xl object-cover"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          <Image
            src={imageConfig.mobileSrc}
            alt=""
            width={imageConfig.mobileWidth}
            height={imageConfig.mobileHeight}
            priority={false} 
            fetchPriority="low"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 0vw"
            quality={75}
            className="rounded-2xl object-cover hidden max-md:block"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;