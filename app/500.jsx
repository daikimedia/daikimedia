import Link from "next/link";
import FadeUpAnimation from "@/components/animations/FadeUpAnimation";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "500 || Server Error",
  description: "Internal server error occurred. Please try again later.",
};

const ServerError = () => {
  return (
    <>
      <main className="mb-150 pt-[200px]">
        <FadeUpAnimation className="container relative">
          <div className="mx-auto max-w-[700px] text-center">
            <h1 className="from-0to-primary/0 bg-gradient-to-b from-primary to-90% bg-clip-text text-[140px] font-bold leading-[1] text-transparent dark:text-transparent">
              500
            </h1>
            <p className="section-tagline -mt-16">Server Error</p>
            <h2 className="mb-9 text-[64px] font-bold leading-[1.22] ">
              Ooops! <br />
              Something Went Wrong
            </h2>
            <p className="mb-8 text-xl">
              We're experiencing some technical difficulties. <br />
              Our team has been notified and is working to fix this issue.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/" className="btn">
                Go Back Home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-outline"
              >
                Try Again
              </button>
            </div>
          </div>
        </FadeUpAnimation>
      </main>
      <Footer />
    </>
  );
};

export default ServerError;
