import React, { useState } from "react";
import { ArrowRight, CheckCircle, Plus, Minus } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, audience, and competitors to craft a strategic plan.",
  },
  {
    title: "Design & Development",
    description:
      "Our team uses the latest frameworks and tools to design stunning interfaces and write clean, maintainable code.",
  },
  {
    title: "Testing & Launch",
    description:
      "Before launching, we rigorously test your website to ensure it's bug-free and optimized for all devices.",
  },
  {
    title: "Ongoing Support",
    description:
      "We offer continuous support and updates to ensure your website evolves with your business.",
  },
];

const caseStudies = [
  {
    client: "ABC Retail",
    challenge: "Slow-loading website and outdated design.",
    solution:
      "Complete redesign with a focus on mobile responsiveness and a modern user interface.",
    results: "250% increase in online sales within six months.",
  },
  {
    client: "Malaysia Tech Hub",
    challenge: "Difficulty ranking on Google.",
    solution:
      "SEO-optimized website with improved load speed and keyword integration.",
    results: "80% boost in organic traffic.",
  },
];

const services = [
  {
    title: "Custom Website Design",
    description: "Tailored to reflect your brand identity.",
  },
  {
    title: "E-commerce Development",
    description: "Build robust platforms for seamless online shopping.",
  },
  {
    title: "CMS Integration",
    description:
      "Easily manage your website with WordPress, Shopify, or custom CMS solutions.",
  },
  {
    title: "SEO Optimization",
    description: "Websites designed to dominate search engine rankings.",
  },
];

const faqses = [
  {
    question: "What industries do you specialize in?",
    answer:
      " We’ve delivered projects for retail, tech startups, healthcare, and more.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "On average, our projects take 4-8 weeks, depending on the complexity.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance packages to keep your website running smoothly.",
  },
];

export default function WebDevelopment() {
  // const [activeTab, setActiveTab] = useState("Consultation");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Transform Your Business with Malaysia’s Leading Web Development
              Agency
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Daiki Media crafts exceptional websites that boost engagement,
              enhance user experience, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold ">
                Get Your Custom Website Today
              </button>
              <button className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Daiki Media */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Why Choose Daiki Media for Web Development?
          </h2>
          <p className="text-2xl mb-12 text-center max-w-3xl mx-auto">
            Why We’re the Best Web Development Agency in Malaysia
          </p>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
            At Daiki Media, we blend cutting-edge technology, creative design,
            and business strategy to deliver websites that stand out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Expertise Across Industries
              </h3>
              <p>
                {" "}
                From e-commerce platforms to corporate websites, we’ve worked
                with startups, SMEs, and global enterprises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                End-to-End Solutions
              </h3>
              <p>
                We handle everything—from design and development to deployment
                and support.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Responsive Design",
              "SEO-Optimized Code",
              "Fast Load Times",
              "Custom Solutions",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
              >
                <div className="bg-black text-white p-3 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{feature}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {/* Add a descriptive line for each feature */}
                  {index === 0 && "Adapts to any device with ease."}
                  {index === 1 && "Optimized for higher search rankings."}
                  {index === 2 && "Lightning-fast performance assured."}
                  {index === 3 && "Tailored to meet your unique needs."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Web Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Our Web Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-[50px]">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="border-2 border-black rounded-3xl p-6 h-full">
                  <span className="absolute top-0 left-0 bg-black text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            See How Our Web Development Services Have Made a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">{study.client}</h3>
                <p className="mb-2">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="mb-2">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <p>
                  <strong>Results:</strong> {study.results}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-[] text-center">
            Comprehensive Web Development Solutions for Every Business
          </h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-3xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className=" px-4">
        <div className="w-full min-h-screen bg-white  px-4 py-16">
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 1xl:gap-x-24 ">
            <div className="mb-12">
              <h3 className="text-sm font-medium mb-2">FAQ&apos;S</h3>
              <h2 className="text-4xl font-bold mb-4">
                Your Questions About Web Development Answered
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our digital agency
                services, processes, and how we can help transform your
                business&apos;s digital presence.
              </p>
            </div>

            <div className="space-y-4 pt-[50px]">
              {faqses.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <span className="ml-4 flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                      }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className=" px-4  ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create a Website That Drives Results?
          </h2>
          <p className="text-xl mb-8">
            As the best web development agency in Malaysia, Daiki Media is here
            to bring your vision to life. Let&apos;s build a website that sets
            you apart.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
              Request a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center">
              Talk to Our Experts <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
