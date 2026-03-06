"use client";
import Image from "next/image";

const HeroContent = () => {
  return (
    <section className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
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

      <div className="col-span-12 md:col-span-6 hidden md:flex items-center justify-center">
        <div className="relative w-full h-auto">
          <Image
            src="/images/hero/testimg-mobile.avif"
            alt="Illustration representing SEO and digital marketing growth"
            width={600}
            height={800}
            priority
            fetchPriority="high"
            sizes="50vw"
            quality={75}
            className="rounded-2xl object-cover"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;