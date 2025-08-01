import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import getMarkDownData from "@/utils/getMarkDownData";
import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "Privacy Policy - Learn About Daiki Media’s Data Protection Practices",
  description:
    "Review Daiki Media’s privacy policy in KL. Understand how we collect, use, and protect your data while ensuring your privacy.",
  keywords:
    "privacy policy, data protection, user privacy, privacy notice, Daiki Media privacy, data security, information collection",
};

const Privacy = () => {
  const privacy = getMarkDownData("content/privacy/");
  return (
    <>
      <main>
        <section className="relative overflow-hidden pb-150 pt-[250px] max-md:pt-150">
          <div className="absolute -top-[800px] left-0 right-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative !max-w-[800px]">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            </div>

            <div className="singlePage">
              <h2 className="mb-3 max-w-[650px] font-semibold leading-[1.33]">
                Privacy Policy
              </h2>
            </div>

            <div className="singlePage">
              {privacy.map((item) => (
                <div key={item.slug}>
                  <ReactMarkdown className="mb-6">{item.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
