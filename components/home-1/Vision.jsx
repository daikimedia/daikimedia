import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import VisionLine1 from "../icons/VisionLine1";
import VisionLine2 from "../icons/VisionLine2";
import VisionLine3 from "../icons/VisionLine3";
import VisionLine4 from "../icons/VisionLine4";
import VisionAnimation from "./VisionAnimation";

const Vision = () => {
  return (
    <section className="relative -mt-24 overflow-hidden bg-gray pb-150 pt-[300px] dark:-mt-24 dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px] dark:max-md:-mt-60">
      <div className="absolute left-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine1 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] max-md:hidden">
        <VisionLine2 />
      </div>
      <div className="absolute left-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine3 />
      </div>
      <div className="absolute right-0 top-0 max-w-[1612px] md:hidden">
        <VisionLine4 />
      </div>
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
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Custom digital roadmaps tailored to your goals
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Comprehensive market analysis and positioning
                </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon item-center relative flex h-7 w-7 justify-center rounded-full bg-white dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary "
                  />
                </span>

                <span className="font-jakarta_sans font-medium dark:text-white">
                  Data-backed implementation strategies
                </span>
              </li>
            </ul>
            <Link
              href="https://api.whatsapp.com/send?phone=601114850067"
              className="btn dark:text-white border border-gray-300"
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
