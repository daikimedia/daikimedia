'use client'
import { useState } from 'react'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import FallbackImage from '@/components/shared/FallbackImage'
import FaqItem from '@/components/shared/FaqItem'
import Link from 'next/link'

const GoogleCoreUpdateContent = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)

  const handleFaqClick = (index) => {
    setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      id: 1,
      question: "Is the December 2025 Core Update a penalty?",
      answer: "No. It is a ranking recalibration, not a punishment."
    },
    {
      id: 2,
      question: "Do I need to change my website if rankings dropped?",
      answer: "Only if genuine improvements are needed. Avoid reactive changes."
    },
    {
      id: 3,
      question: "How long does recovery take?",
      answer: "Weeks to months. Core updates reward sustained quality improvements."
    },
    {
      id: 4,
      question: "Should I delete low performing pages?",
      answer: "Only after careful evaluation. Blind deletions often cause more harm."
    },
    {
      id: 5,
      question: "Does E-E-A-T directly affect rankings?",
      answer: "It influences rankings through multiple trust and quality signals."
    },
    {
      id: 6,
      question: "Can technical SEO alone fix ranking drops?",
      answer: "No. Content quality and trust are the primary drivers."
    }
  ]

  return (
    <article className="relative pb-150 w-full">
      <div className="container relative">
        {/* Introduction Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          
          <FadeUpAnimation className="mb-12">
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
                <FallbackImage
                  src="/images/google-december-2025-core-update/image123.jpg"
                  alt="Google December 2025 Core Update - SEO Strategy"
                  className="rounded w-full h-[400px] max-md:h-[300px] object-cover"
                  width={1200}
                  height={400}
                />
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline mb-3">Understanding the Update</p>
                  <h2 className="mb-6">What the December 2025 Core Update Really Means</h2>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Some websites saw rankings drop without obvious errors. Others gained visibility quietly, without dramatic changes. This happened because core updates do not reward tactics. They reward alignment with how Google now understands user expectations.
                      </p>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        At DaikiMedia, we work with businesses across Malaysia and APAC that want stability, not guesswork. This guide explains what the December 2025 Core Update really means, how it affects websites, and what actions actually matter if your goal is sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* What Is the December 2025 Google Core Update */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6 max-md:order-2">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        The December 2025 Core Update is a broad algorithm update that reassesses rankings across all industries and regions. It does not target a single technical issue like spam or speed.
                      </p>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Instead, Google evaluates whether websites genuinely deserve to be recommended today.
                      </p>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Google has stated clearly that there is nothing special creators need to do if they are already producing helpful, people first content. In other words, this update is not about fixing loopholes. It is about quality.
                      </p>
                      <div className="rounded-medium bg-primary-50 dark:bg-primary-900/20 p-6 border border-primary-200 dark:border-primary-800">
                        <p className="font-semibold text-primary dark:text-primary text-lg leading-relaxed">
                          At DaikiMedia, we summarize Google's position simply: If your website helps users make better decisions, you are moving in the right direction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6 max-md:order-1">
                <div className="max-w-[550px] ml-auto max-md:ml-0">
                  <p className="section-tagline mb-3">Core Update Explained</p>
                  <h2 className="mb-6">What Is the December 2025 Google Core Update</h2>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Why Rankings Change Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline mb-3">Ranking Changes</p>
                  <h2 className="mb-6">Why Rankings Change Even When Nothing Is Broken</h2>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Many businesses panic after a core update because they assume rankings dropped due to a mistake.
                      </p>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        In reality, core updates are comparative. Google is not judging your site against rules. It is judging your site against alternatives competing for the same intent.
                      </p>
                      <div>
                        <p className="font-semibold mb-3 text-gray-900 dark:text-white">Rankings can change because:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-paragraph-light dark:text-[#A1A49D]">
                          <li>Competitors improved clarity or depth</li>
                          <li>Other sites better matched user intent</li>
                          <li>Google refined how it interprets satisfaction</li>
                          <li>User expectations evolved</li>
                        </ul>
                      </div>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        A ranking drop does not automatically mean your content is bad. It often means something else is now more helpful.
                      </p>
                      <div className="rounded-medium bg-primary-50 dark:bg-primary-900/20 p-6 border border-primary-200 dark:border-primary-800">
                        <p className="font-semibold text-primary dark:text-primary text-lg leading-relaxed">
                          This is where experienced guidance matters more than reactive fixes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* What Google Is Reassessing Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <p className="section-tagline">Google's Evaluation Criteria</p>
              <h2>What Google Is Reassessing in December 2025</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {/* Overall Site Quality */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Overall Site Quality</h3>
                  <p className="mb-4">
                    Google increasingly evaluates quality at the site level, not just the page level.
                  </p>
                  <p className="font-semibold mb-2">Websites that struggle often contain:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Thin or outdated articles</li>
                    <li>Duplicate or overlapping pages</li>
                    <li>Low value archives</li>
                    <li>Content created for traffic</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            {/* Content Satisfaction */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Content Satisfaction</h3>
                  <p className="mb-4">
                    Keyword usage is no longer enough. Pages that perform well typically:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Answer the main question clearly</li>
                    <li>Address follow up concerns</li>
                    <li>Help users compare options</li>
                    <li>Reduce the need to search again</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            {/* Trust and Credibility */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Trust & Credibility</h3>
                  <p className="mb-4">
                    The December 2025 update reinforces E-E-A-T:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Experience</li>
                    <li>Expertise</li>
                    <li>Authoritativeness</li>
                    <li>Trustworthiness</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>
          </div>

          {/* E-E-A-T Table Section */}
          <FadeUpAnimation className="mt-12">
            <div className="mb-8 overflow-hidden rounded-medium">
              <FallbackImage
                src="/images/google-december-2025-core-update/image456.jpg"
                alt="E-E-A-T Framework: Experience, Expertise, Authoritativeness, Trustworthiness"
                className="rounded w-full h-[300px] object-cover"
                width={800}
                height={300}
              />
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Component</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-dark-200">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">E</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Experience</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">E</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Expertise</td>
                      </tr>
                      <tr className="bg-white dark:bg-dark-200">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">A</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Authoritativeness</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">T</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Trustworthiness</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6">
                  Google is placing more weight on whether content reflects real world experience and whether users can clearly see who is behind the information.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Technical Foundations Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation className="mb-12">
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
                <FallbackImage
                  src="/images/google-december-2025-core-update/image789.jpg"
                  alt="Technical SEO Foundations - Page Speed, Mobile Friendliness, Core Web Vitals"
                  className="rounded w-full h-[350px] object-cover"
                  width={1000}
                  height={350}
                />
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <div className="grid grid-cols-12">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline">Technical SEO</p>
                  <h2>Technical Foundations That Can Hold Back Good Content</h2>
                </div>
              </div>
              <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
                <p>
                  Technical SEO does not replace content quality, but poor technical foundations can suppress even excellent content.
                </p>
                <br />
                <p className="font-semibold mb-2">Sites should aim for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Fast loading of main content</li>
                  <li>Stable layouts without sudden shifts</li>
                  <li>Smooth interaction</li>
                </ul>
                <p className="font-semibold mb-2">Common mobile issues include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Text that is hard to read</li>
                  <li>Buttons placed too close together</li>
                  <li>Intrusive popups</li>
                  <li>Broken mobile layouts</li>
                </ul>
                <p className="font-semibold">
                  Mobile usability is now a requirement, not a bonus.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Content Quality Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation className="mb-12">
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
                <FallbackImage
                  src="/images/google-december-2025-core-update/image112.jpg"
                  alt="Content Quality - People First Content Strategy"
                  className="rounded w-full h-[350px] object-cover"
                  width={1000}
                  height={350}
                />
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <div className="grid grid-cols-12">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline">Content Strategy</p>
                  <h2>Why Content Quality Is Now a Site Wide Signal</h2>
                </div>
              </div>
              <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
                <p>
                  Google no longer evaluates content in isolation. Content should exist to help users, not to manipulate search engines.
                </p>
                <br />
                <p className="font-semibold mb-2">Ask honestly:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Does this page solve a real problem?</li>
                  <li>Would a user trust this advice?</li>
                  <li>Does it add value beyond competitors?</li>
                </ul>
                <p className="font-semibold mb-2">High performing pages usually include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Original insights</li>
                  <li>Real examples</li>
                  <li>Practical decision guidance</li>
                  <li>Clear explanations of pros and cons</li>
                </ul>
                <p>
                  Simply rephrasing existing content is no longer enough.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Content Pruning Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline">Content Optimization</p>
                  <h2>Pruning Low Value Pages Without Damaging Rankings</h2>
                </div>
              </div>
              <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
                <p>
                  Content pruning is not about deleting aggressively. It is about improving quality ratios.
                </p>
                <br />
                <p className="font-semibold mb-2">Low value pages often have:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>No traffic</li>
                  <li>No backlinks</li>
                  <li>No conversions</li>
                  <li>No unique value</li>
                </ul>
                <p className="font-semibold mb-2">However:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Pages with backlinks should be redirected</li>
                  <li>Niche pages should be enhanced</li>
                  <li>Historical content may be archived</li>
                </ul>
                <p className="font-semibold text-primary dark:text-primary">
                  At DaikiMedia, pruning is always strategic, never emotional.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Strengthening E-E-A-T Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <p className="section-tagline">Building Trust</p>
              <h2>Strengthening E-E-A-T in 2025</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 grid grid-cols-3 gap-8 max-md:grid-cols-1">
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Clear Authorship</h3>
                  <p className="mb-4">
                    Every article should clearly show who wrote it, why they are qualified, and how they gained experience.
                  </p>
                  <p className="font-semibold">
                    Author bios and About pages are no longer optional.
                  </p>
                </div>
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Real Experience</h3>
                  <p className="mb-4">
                    Experience matters more than theory. Strong signals include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>First hand observations</li>
                    <li>Photos from actual work</li>
                    <li>Descriptions of testing</li>
                    <li>Transparent limitations</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Trust Signals</h3>
                  <p className="mb-4">
                    Trust is reinforced through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Visible contact information</li>
                    <li>Privacy and terms pages</li>
                    <li>HTTPS security</li>
                    <li>Accurate claims</li>
                    <li>Responsible handling of reviews</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>
          </div>
        </section>

        {/* Structured Data Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6 max-md:order-2">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Structured data does not directly increase rankings, but it improves visibility.
                      </p>
                      <div>
                        <p className="font-semibold mb-3 text-gray-900 dark:text-white">Schema helps:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-paragraph-light dark:text-[#A1A49D]">
                          <li>Search engines understand context</li>
                          <li>Pages qualify for rich results</li>
                          <li>Listings earn higher click through rates</li>
                        </ul>
                      </div>
                      <div className="rounded-medium bg-yellow-50 dark:bg-yellow-900/20 p-6 border border-yellow-200 dark:border-yellow-800">
                        <p className="font-semibold text-yellow-800 dark:text-yellow-200 text-lg leading-relaxed">
                          Schema must always reflect visible content. Misuse can cause penalties.
                        </p>
                      </div>
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        As AI driven search features expand, structured content becomes even more important.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6 max-md:order-1">
                <div className="max-w-[550px] ml-auto max-md:ml-0">
                  <p className="section-tagline mb-3">Search Visibility</p>
                  <h2 className="mb-6">Structured Data and Search Visibility</h2>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Recovery Time Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline mb-3">Recovery Timeline</p>
                  <h2 className="mb-6">How Long Recovery Takes After a Core Update</h2>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Recovery is usually gradual.
                      </p>
                      <div>
                        <p className="font-semibold mb-3 text-gray-900 dark:text-white">Key realities:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-paragraph-light dark:text-[#A1A49D]">
                          <li>Major improvements often align with the next core update</li>
                          <li>Incremental gains may appear earlier</li>
                          <li>Google systems refresh continuously</li>
                        </ul>
                      </div>
                      <div className="rounded-medium bg-primary-50 dark:bg-primary-900/20 p-6 border border-primary-200 dark:border-primary-800">
                        <p className="font-semibold text-primary dark:text-primary text-lg leading-relaxed">
                          Waiting without action is riskier than improving deliberately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* FAQ Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[830px] text-center">
              <p className="section-tagline mb-3">Common Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 mx-auto max-w-[830px]">
            <div className="[&>*:not(:last-child)]:mb-5">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeFaqIndex === faq.id}
                  onClick={() => handleFaqClick(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DaikiMedia Partner Section */}
        <section className="relative mb-[160px] max-md:mb-25">
          <FadeUpAnimation>
            <div className="grid grid-cols-12">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline">Your Partner</p>
                  <h2>DaikiMedia as Your Core Update Partner</h2>
                </div>
              </div>
              <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
                <p>
                  If your website dropped after the December 2025 Core Update, the real question is not: "How do I fix SEO?" It is: "How do I become the result Google wants to recommend?"
                </p>
                <br />
                <p>
                  At DaikiMedia, we do not chase algorithms. We help businesses build websites that remain relevant as algorithms evolve.
                </p>
                <br />
                <p className="font-semibold mb-2">We work as a strategic partner for brands that want:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Long term ranking stability</li>
                  <li>Content built for decisions, not keywords</li>
                  <li>SEO aligned with conversion and trust</li>
                  <li>Protection against future core updates</li>
                </ul>
                <p className="font-semibold mb-2">DaikiMedia offers Core Update Impact Reviews, where we analyze:</p>
                <ul className="list-none space-y-2 ml-4 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2">☐</span>
                    <span>What actually changed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">☐</span>
                    <span>Which pages matter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">☐</span>
                    <span>What should be improved, kept, or removed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">☐</span>
                    <span>What is safe to ignore</span>
                  </li>
                </ul>
                <p className="font-semibold mb-2">
                  No panic. No templates. No generic advice.
                </p>
                <p>
                  If you want to understand what Google is really evaluating on your website, DaikiMedia is your partner.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Final Perspective */}
        <section className="relative pb-20 max-md:overflow-hidden max-md:pb-25 max-md:pt-25">
          <div className="container relative">
            <div className="absolute -bottom-[442px] left-1/2 -z-10 flex -translate-x-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <FadeUpAnimation>
              <div className="mx-auto text-center">
                <p className="section-tagline mb-3">Final Perspective</p>
                <h2 className="mx-auto mb-5 max-w-[800px] text-[48px] font-semibold max-lg:text-[32px]">
                  Build for People First, Let Google Follow
                </h2>
                <p className="mx-auto mb-12 max-w-[600px] max-lg:mt-6 text-lg leading-relaxed">
                  The December 2025 Core Update did not reward shortcuts. It rewarded clarity, experience, and trust.
                </p>
                <p className="mx-auto mb-12 max-w-[600px] text-lg leading-relaxed">
                  Websites that help users make better decisions will continue to win. Those that chase tricks will continue to reset.
                </p>
                <div className="mx-auto mb-12 max-w-[700px] rounded-medium bg-primary-50 dark:bg-primary-900/20 p-8 border border-primary-200 dark:border-primary-800">
                  <p className="text-xl font-semibold text-primary dark:text-primary leading-relaxed">
                    If your goal is sustainable growth, build for people first and let Google follow.
                  </p>
                </div>
                <Link href="/contact" className="btn">
                  Get Your Core Update Review
                </Link>
                <ul className="mx-auto mt-20 flex max-w-[815px] items-center justify-between max-lg:mt-5 max-lg:flex-col max-lg:gap-5">
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
                    <p>Free Core Update Impact Review</p>
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
                    <p>No Panic, No Templates</p>
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
                    <p>Sustainable Growth Strategy</p>
                  </li>
                </ul>
              </div>
            </FadeUpAnimation>
          </div>
        </section>
      </div>
    </article>
  )
}

export default GoogleCoreUpdateContent
