import TestimonialList from "@/data/testimonial";
import Link from "next/link";
import { RatingStars } from "./Rating";
import FadeUpOneByOneAnimation from "../animations/FadeUpOneByOneAnimation";

const Testimonial = () => {
  const { TestimonialData } = TestimonialList;
  return (
    <section className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:py-20">
      <div className="absolute left-0 right-0 top-1/2 h-full w-full -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-center bg-no-repeat opacity-70  md:hidden"></div>
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Testimonials</p>
          <h2> What our customer&rsquo;s say about our company </h2>
        </div>
        <div className="relative z-10">
          <div className="max-lg:item-center absolute left-1/2 top-[37%] -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col max-md:hidden">
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px] "></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/25 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px] "></div>
          </div>
          <div className=" mb-12 flex flex-wrap justify-center gap-6 gap-y-8 max-md:flex-col">
            {TestimonialData.slice(0, 5).map((testimonial, i) => (
              <FadeUpOneByOneAnimation
                i={i}
                className="rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200 md:w-[calc(50%_-_20px)] lg:w-[calc(33.33%_-_20px)]"
                key={testimonial.id}
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="mb-7">
                    <RatingStars
                      rating={testimonial.rating}
                      ratingColor={"text-paragraph dark:text-white"}
                      ratingEmptyColor={"text-[#A7A7B4] dark:text-[#646463]"}
                    />
                  </div>

                  <div className="flex items-center border-t border-dashed border-gray-100 pt-7 dark:border-borderColor-dark">
                    <div className="block">
                      <h3 className="text-base font-semibold">
                        {testimonial.author.name}
                      </h3>
                      <p className="font-jakarta_sans text-sm font-medium text-paragraph-light dark:text-[#A1A49D]">
                        Client
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUpOneByOneAnimation>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link href="/contact" className="btn-outline dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white">
              Start Your jouney
            </Link>
          </div>
        </div>
        <div className="absolute bottom-15 left-0 z-10 h-[450px] w-full bg-gradient-to-b  from-transparent  to-white to-100% dark:to-dark-300"></div>
      </div>
    </section>
  );
};

export default Testimonial;
