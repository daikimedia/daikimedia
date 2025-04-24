import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import VisionLine1 from "../icons/VisionLine1";
import VisionLine2 from "../icons/VisionLine2";
import VisionLine3 from "../icons/VisionLine3";
import VisionLine4 from "../icons/VisionLine4";
import VisionAnimation from "./VisionAnimation";

const features = [
  "Custom digital roadmaps tailored to your goals",
  "Comprehensive market analysis and positioning",
  "Data-backed implementation strategies",
];

const Vision = () => {
  return (
    <section className="relative -mt-24 overflow-hidden bg-gray pb-150 pt-[300px] dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px]">
      {/* Decorative Lines */}
      <VisionLine1 className="absolute left-0 top-0 max-w-[1612px] max-md:hidden" />
      <VisionLine2 className="absolute right-0 top-0 max-w-[1612px] max-md:hidden" />
      <VisionLine3 className="absolute left-0 top-0 max-w-[1612px] md:hidden" />
      <VisionLine4 className="absolute right-0 top-0 max-w-[1612px] md:hidden" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            <p className="section-tagline">Digital Solutions</p>
            <h2 className="mb-8 max-lg:mb-4">
              A strong digital strategy is crucial for business growth.
            </h2>
            <p className="mb-11 max-lg:mb-5">
              Transform your online presence with data-driven solutions that
              deliver measurable results and sustainable growth for your
              business.
            </p>

            <ul className="mb-14 space-y-4 max-lg:space-y-3">
              {features.map((text, idx) => (
                <li key={idx} className="flex items-center gap-x-2">
                  <span className="shadow-icon flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-dark-200">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-paragraph dark:text-primary"
                    />
                  </span>
                  <span className="font-jakarta_sans font-medium dark:text-white">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="https://api.whatsapp.com/send?phone=601114850067"
              className="btn border border-gray-300 dark:text-white"
            >
              Start Your Journey
            </Link>
          </div>

          <div>
            <VisionAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
