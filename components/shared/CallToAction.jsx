import Link from 'next/link'


export const metadata = {
  title: "Call to Action | Daiki Media",
  description:
    "Take the next step with Daiki Media. Discover our compelling call-to-action to engage with our services and elevate your business growth through innovative digital marketing solutions.",
  keywords:
    "Daiki Media, call to action, business growth, digital marketing, engagement, services, marketing solutions, business development",
};

const CallToAction = ({ title }) => {
  return (
    <section className="relative pb-20  max-md:overflow-hidden max-md:pb-25 max-md:pt-25">
      <div className="container relative ">
        <div className="absolute -bottom-[442px] left-1/2 -z-10  flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
        <div className=" mx-auto text-center">
          <h2 className="mx-auto mb-5 max-w-[800px] text-[48px] font-semibold max-lg:text-[32px]">{title}</h2>
          <p className="mx-auto mb-12 max-w-[400px] max-lg:mt-6">
            By partnering with Daiki Media for your digital needs, we&apos;ll transform your vision into measurable
            success.
          </p>
          <Link href="/contact" className="btn">
            Get Started Today
          </Link>
          <ul className="mx-auto mt-20 flex  max-w-[815px] items-center justify-between max-lg:mt-5 max-lg:flex-col max-lg:gap-5">
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Free Digital Strategy Consultation</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Transparent Project Timeline</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Satisfaction Guaranteed</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
