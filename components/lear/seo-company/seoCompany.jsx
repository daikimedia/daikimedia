"use client";
import React, { useState } from "react";
import {
  Minus,
  Plus,
  KeyRound,
  FileCode,
  Cpu,
  Link2,
  Users,
  Eye,
  DollarSign,
  Zap,
  Brain,
} from "lucide-react";

const benefits = [
  {
    title: "Boosted Visibility",
    description: "Get your website on the first page of search results.",
    icon: Eye,
  },
  {
    title: "Increased Traffic",
    description:
      "Attract more visitors who are actively searching for your offerings.",
    icon: Users,
  },
  {
    title: "Higher ROI",
    description: "Drive organic traffic that converts without costly ad spend.",
    icon: DollarSign,
  },
  {
    title: "Better User Experience",
    description: "Enjoy faster load times and mobile-friendly designs.",
    icon: Zap,
  },
  {
    title: "Expert Guidance",
    description:
      "Leverage the knowledge of professionals who stay ahead of SEO trends.",
    icon: Brain,
  },
];

const faqs = [
  {
    question: " What is the average cost of hiring an SEO company?",
    answer:
      "The cost varies based on services, but quality SEO typically ranges from $750 to $5000 per month.",
  },
  {
    question: " How long does it take to see results?",
    answer:
      "While some improvements can be seen in 3-6 months, consistent SEO delivers long-term results over time.",
  },
  {
    question: "Can I do SEO myself?",
    answer:
      "Yes, but professional SEO companies have the tools, expertise, and time to deliver faster and more impactful results.",
  },
  {
    question: "Why should I choose Daiki Media?",
    answer:
      "We offer personalized strategies, transparent reporting, and a proven track record of helping businesses grow organically.",
  },
];
export const metadata = {
  title: "SEO Optimization Companies | Expert SEO Services for Business | Daiki Media",
  canonicalUrl: "https://www.daikimedia.com/learn/what-is-seo-company",
  description:
    "Partner with Daikai Media, a leading SEO company. Explore our tailored strategies to enhance online visibility and achieve top search engine rankings for your business.",
  keywords:
    "SEO company, Daikai Media, search engine optimization, SEO services, online visibility, SEO strategies, improve website ranking",
};

export default function SeoCompany() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mt-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            What is an SEO Company and Why Your Business Needs One
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            &quot;Discover how Daiki Media can help your business rank higher,
            drive traffic, and grow revenue with expert SEO services.&quot;
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            In today&apos;s digital age, standing out online is more challenging
            than ever. An SEO company specializes in improving your
            website&apos;s visibility on search engines like Google, driving
            organic traffic, and ensuring your business gets noticed.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            At <strong>Daiki Media</strong>, we help businesses like yours
            unlock the potential of search engines to connect with your target
            audience. With proven strategies and cutting-edge tools, we
            transform websites into lead-generating machines.
          </p>
          <div className=" py-8 px-6  text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Ready to make your website the cornerstone of your success?
            </h2>
            <p className="text-black text-lg mb-6">
              Contact Daiki Media today and take the first step towards higher
              rankings!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white dark:text-black dark:hover:text-white  font-semibold px-6 py-3 rounded-full shadow hover:bg-black hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mt-32 px-4 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 inline-block">
            Understanding SEO: The Backbone of Online Success
            <div className="absolute bottom-0 text-center left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
          </h2>

          <div className="mb-8">
            <p className="text-lg leading-relaxed">
              Search Engine Optimization (SEO) is the process of optimizing your
              website to rank higher on search engines, like Google, for
              relevant searches. It involves various techniques, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div className="p-6 rounded-3xl border-2 bg-white border-black hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <div className="flex items-center mb-4">
                <KeyRound className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl dark:text-black font-semibold">1. Keyword Research</h3>
              </div>
              <p className="dark:text-black">
                Identifying what your potential customers are searching for.
              </p>
            </div>

            <div className="p-6 rounded-3xl border-2 bg-white border-black hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <div className="flex items-center mb-4">
                <FileCode className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl  dark:text-black font-semibold">2. On-Page SEO</h3>
              </div>
              <p className="dark:text-black">
                Enhancing content, meta tags, and internal links for better
                rankings.
              </p>
            </div>

            <div className="p-6 rounded-3xl border-2 border-black bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl dark:text-black font-semibold">3. Technical SEO</h3>
              </div>
              <p className="dark:text-black">Ensuring your website is fast, secure, and mobile-friendly.</p>
            </div>

            <div className="p-6 rounded-3xl border-2 bg-white border-black hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <div className="flex items-center mb-4">
                <Link2 className="w-8 h-8 text-black mr-3" />
                <h3 className="text-xl font-semibold dark:text-black">4. Off-Page SEO</h3>
              </div>
              <p className="dark:text-black">Building high-quality backlinks to improve authority.</p>
            </div>
          </div>

          <div className="p-4 mt-12 ">
            <h3 className="text-2xl text-center font-bold mb-4">
              Why is SEO important?
            </h3>
            <p className="text-lg mb-6">
              With billions of searches happening daily, SEO is the bridge
              between your website and the audience searching for your products
              or services.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-xl font-semibold">Key Insight:</p>
              </div>
              <p className="text-lg italic flex-1 ml-4">
                &quot;93% of online experiences begin with a search engine. Are
                you leveraging SEO to capture this traffic?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* mini CTA Section */}
      <section className="mt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
            The Role of an SEO Company: From Strategy to Execution
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            An SEO company like Daiki Media does more than tweak keywords. We
            offer end-to-end solutions to improve your online visibility.
            Here&apos;s how:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Website Audits
              </h2>
              <p className="dark:text-gray-600">
                Comprehensive analysis of your website&apos;s performance.
              </p>
            </div>
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Competitor Analysis
              </h2>
              <p className="dark:text-gray-600">
                Studying your industry to outrank your competitors.
              </p>
            </div>
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Customized Strategies
              </h2>
              <p className="dark:text-gray-600">
                Tailoring solutions based on your goals and audience.
              </p>
            </div>
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Content Creation
              </h2>
              <p className="dark:text-gray-600">
                Developing blog posts, landing pages, and other content
                optimized for search.
              </p>
            </div>
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Technical Fixes
              </h2>
              <p className="dark:text-gray-600">
                Improving site speed, fixing broken links, and enhancing mobile
                usability.
              </p>
            </div>
            <div className="bg-white border-2 border-black shadow-lg rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Analytics & Reporting
              </h2>
              <p className="dark:text-gray-600">
                Measuring performance and adapting strategies for continuous
                growth.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mt-12">
            At Daiki Media, we don&apos;t just help you rank higher; we help you
            convert visitors into customers.
          </p>
        </div>
      </section>

      {/* card 4 Section */}
      <section className="mt-32">
        <div className=" px-6 lg:px-12 py-10 rounded-3xl shadow-lg border border-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black">
            Why Your Business Needs Daiki Media&apos;s SEO Expertise
          </h2>
          <p className="text-gray-700 mb-8 text-center">
            Investing in an SEO company comes with countless benefits. Here are
            some of the biggest advantages of partnering with Daiki Media:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-3xl border border-black shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="bg-black rounded-full p-3 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold dark:text-red-500 text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="dark:text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-300">
            <p className="text-lg  font-semibold dark:text-black">
              Did you know that businesses with strong SEO strategies can
              generate over 50% of their website traffic from organic searches?
            </p>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="container mx-auto px-6 lg:px-12 py-10 rounded-xl border-2xl shadow-lg border border-gray-300">
          <h1 className="text-3xl lg:text-4xl font-bold dark:text-white text-center mb-8">
            The Role of an SEO Company: From Strategy to Execution
          </h1>
          <p className="text-lg dark:text-white text-center max-w-3xl mx-auto mb-12">
            An SEO company like Daiki Media does more than tweak keywords. We
            offer end-to-end solutions to improve your online visibility.
            Here&apos;s how:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-3xl p-6 border border-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Website Audits
              </h2>
              <p className="dark:text-gray-600">
                Comprehensive analysis of your website&apos;s performance.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-6 border border-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Competitor Analysis
              </h2>
              <p className="dark:text-gray-600">
                Studying your industry to outrank your competitors.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-6 border border-black hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Customized Strategies
              </h2>
              <p className="dark:text-gray-600">
                Tailoring solutions based on your goals and audience.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-6 border border-black hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Content Creation
              </h2>
              <p className="dark:text-gray-600">
                Developing blog posts, landing pages, and other content
                optimized for search.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-6 border border-black hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Technical Fixes
              </h2>
              <p className="dark:text-gray-600">
                Improving site speed, fixing broken links, and enhancing mobile
                usability.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-6 border border-black hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold dark:text-red-500 mb-4">
                Analytics & Reporting
              </h2>
              <p className="dark:text-gray-600">
                Measuring performance and adapting strategies for continuous
                growth.
              </p>
            </div>
          </div>
          <p className="text-lg dark:text-white text-center max-w-3xl mx-auto mt-12">
            At Daiki Media, we don&apos;t just help you rank higher; we help you
            convert visitors into customers.
          </p>
        </div>
      </section>

      {/* faqs */}
      <section className="mt-32 py-16">
        <div className="px-4">
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 xl:gap-x-24">
            <div className="mb-12">
              <h3 className="text-sm text-red-500 font-medium mb-2">
                FAQ&apos;S
              </h3>
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                Frequently Asked Questions About Digital Agency Services
              </h2>
              <p className="text-gray-600 text-lg">
                Get answers to common questions about our digital agency
                services, processes, and how we can help transform your
                business&apos;s digital presence.
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-lg text-gray-800">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-red-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-red-500" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                      }`}
                  >
                    <p className="dark:text-gray-600 text-lg">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
