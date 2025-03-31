
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SolutionAnimation from "./SolutionAnimation";

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:py-150">
              <div className="relative mx-auto aspect-video">
                <SolutionAnimation />
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline">Strong Solutions</p>
            <h2 className="mb-8 max-lg:mb-4">
              Ensure powerful digital solutions are driving your success 24/7
            </h2>
            <p className="mb-11 max-lg:mb-6">
              Experience seamless digital transformation with our comprehensive
              suite of solutions backed by cutting-edge technology and expert
              support.
            </p>
            <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-paragraph dark:text-primary"
                />
                <span className="font-jakarta_sans font-medium dark:text-white">
                  On Demand Support
                </span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-paragraph dark:text-primary"
                />
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Seamless Integration
                </span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-paragraph dark:text-primary"
                />
                <span className="font-jakarta_sans font-medium dark:text-white">
                  Advanced Technology
                </span>
              </li>
            </ul>
            <Link
              href="https://api.whatsapp.com/send?phone=601114850067"
              className="btn-outline dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
