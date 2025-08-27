import Link from "next/link";
import SolutionAnimation from "@/components/home-1/SolutionAnimation";

const CustomSectionOne = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-white dark:bg-dark-300 py-20 lg:pb-15 lg:pt-[160px]">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 1xl:gap-x-24">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto aspect-video">
                <SolutionAnimation />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:-mt-15">
              <p className="section-tagline">Strong Solutions</p>
              <h2 className="mb-8 max-lg:mb-4">
                Unleash Business Growth with Daiki Media: Your All-in-One
                Digital Partner{" "}
              </h2>
              <p className="mb-11 max-lg:mb-6">
                When it comes to scaling revenue through targeted marketing and
                top-tier technology solutions, not every agency can truly
                connect strategy to results. Daiki Media, however, combines
                award-winning expertise, data-driven strategies, and
                cutting-edge technology to drive measurable success. With over a
                decade of experience across industries, we have empowered
                clients to reach their full potential, collectively generating
                billions in revenue. Ready to elevate your brand? Request a
                customized strategy from Daiki Media today and experience the
                impact of results-driven digital marketing, web development, and
                more!
              </p>

              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 1xl:gap-x-24">
            <div className="lg:-mt-15">
              <p className="section-tagline">Strong Solutions</p>
              <h2 className="mb-8 max-lg:mb-4">
                How Daiki Media Drives Revenue Across Channels?
              </h2>
              <p className="mb-11 max-lg:mb-6">
                Daiki Media offers a suite of services designed to bring your
                vision to life. From robust digital marketing strategies to
                state-of-the-art app and web development, we deliver cohesive,
                multi-channel campaigns that prioritize your goals.
              </p>
              <p className="mb-11 max-lg:mb-6">
                Leave the complexities of managing multiple vendors behind—our
                one-stop agency provides everything you need to excel online.
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
              >
                Start Your Journey
              </Link>
            </div>
            <div>
              <div className="relative mx-auto aspect-video">
                <SolutionAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomSectionOne;
