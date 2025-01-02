export const metadata = {
  title: "Chat Optimization | Daikai Media",
  description:
    "Optimize your customer interactions with Daikai Media's Chat Optimization tools. Enhance engagement, streamline communication, and improve user satisfaction.",
  keywords:
    "Chat optimization, Daikai Media, customer engagement, chatbot solutions, streamline communication, improve user satisfaction, live chat tools",
};

export default function ChatOptimization() {
  return (
    <div className="pt-[150px] pb-[150px]">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Generative Engine And Chat Optimization
          </h1>
          <p className="text-lg text-gray-600">
            Boost Your AI Search Visibility with Generative Engine Optimization
            (GEO) Services
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data-Driven Campaigns to Expand Your Search Presence",
              content: [
                "With MarketingCloudFX, our exclusive client platform, we enhance your search visibility across AI engines using over a billion data points, machine learning, and 20+ marketing tools",
                "Your Daiki Media account manager leverages this cutting-edge technology to handle the details, so you can stay focused on high-level goals",
              ],
            },
            {
              title: "Performance-Based Pricing for AI Search Optimization",
              content: [
                "Starting at $2,250/month, our custom AI engine optimization plans are tailored to meet your business’s needs. We conduct thorough SEO audits and align our strategies with your goals",
              ],
              list: [
                "Your SEO Performance",
                "Your Business Objectives",
                "Your Consultation Needs",
              ],
            },
            {
              title:
                "Partnering with Daiki Media for AI Search Optimization Services",
              content: [
                "Choosing Daiki Media gives your business a competitive edge in AI-driven search results. We offer tailored strategies that maximize your search visibility and revenue",
              ],
              list: [
                "Maximize Search Visibility",
                "Diversify Traffic Sources",
                "Leverage AI Insights",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-black bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:border-red-500 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            >
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                {item.title}
              </h2>
              {item.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
              {item.list && (
                <ul className="mt-4 space-y-2 pl-5 text-gray-700">
                  {item.list.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frequently Asked Questions About GEO Services",
              content: [
                "<strong>What is AI Search Optimization?</strong><br />AI search optimization improves your website’s visibility in AI-powered search engines like Perplexity and Copilot",
                "<strong>How Much Does GEO Cost?</strong><br />Starting at $3,000 per month, pricing varies based on your unique needs and level of service required",
              ],
            },
            {
              title: "Popular AI Search Platforms and Their Features",
              list: [
                "Google AI Overviews: Summarizes results at the top of searches",
                "Bing AI Summaries: Provides search result summaries with citations",
                "Copilot and Perplexity: AI search engines with query answers",
              ],
            },
            {
              title: "Get Started with GEO Services",
              content: [
                "Position your brand in AI-driven search results with Daiki Media’s proven GEO services. Our clients have generated over $10 billion in revenue thanks to our expertise",
              ],
              button: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-black p-6 shadow-lg transition-all duration-300 ease-in-out hover:border-red-500 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            >
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                {item.title}
              </h2>
              {item.content &&
                item.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              {item.list && (
                <ul className="mt-4 space-y-2 pl-5 text-gray-700">
                  {item.list.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              )}
              {item.button && (
                <button
                  className="mt-6 px-6 py-3 font-semibold border-2 border-black text-black shadow rounded-3xl transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black"
                  aria-label="Request a Proposal"
                >
                  Request a Proposal
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
