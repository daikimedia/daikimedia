"use client";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { useRef } from "react";
import FallbackImage from "@/components/shared/FallbackImage";

export default function CaseStudyContent({ caseStudy }) {
  const imageUrl =
    caseStudy.featuredImage && caseStudy.featuredImage !== ""
      ? caseStudy.featuredImage
      : caseStudy.thumbnail || "/images/blog/blog-fallback-img.webp";

  // Animation refs
  const backgroundRef = useRef(null);
  const initialSituationRef = useRef(null);
  const auditRef = useRef(null);
  const strategyRef = useRef(null);
  const executionRef = useRef(null);
  const timelineRef = useRef(null);
  const resultsRef = useRef(null);
  const impactRef = useRef(null);
  const insightsRef = useRef(null);

  const backgroundAnimation = useWhileInView(backgroundRef);
  const initialSituationAnimation = useWhileInView(initialSituationRef);
  const auditAnimation = useWhileInView(auditRef);
  const strategyAnimation = useWhileInView(strategyRef);
  const executionAnimation = useWhileInView(executionRef);
  const timelineAnimation = useWhileInView(timelineRef);
  const resultsAnimation = useWhileInView(resultsRef);
  const impactAnimation = useWhileInView(impactRef);
  const insightsAnimation = useWhileInView(insightsRef);

  return (
    <article className="relative pb-150 w-full container mx-auto">
      <div className="container relative">
        {/* Featured Image */}
        <motion.div 
          className="mb-16 overflow-hidden rounded-medium p-2.5 max-md:h-[400px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 w-full max-w-4xl">
            <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
              <FallbackImage
                src={imageUrl}
                alt={caseStudy.title}
                className="rounded max-md:h-full max-md:object-cover w-full h-[500px] max-md:h-[400px] max-md:object-center"
                width={1200}
                height={500}
              />
            </div>
          </div>
        </motion.div>

        {/* Background Section */}
        {caseStudy.background && (
          <motion.section 
            ref={backgroundRef}
            className="mb-16"
            initial="initial"
            animate={backgroundAnimation}
            variants={fadeUpAnimation}
          >
            <div className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-[1.02] dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {caseStudy.background.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">{caseStudy.background.content}</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Initial Situation Section */}
        {caseStudy.initialSituation && (
          <motion.section 
            ref={initialSituationRef}
            className="mb-16"
            initial="initial"
            animate={initialSituationAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.initialSituation.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-6">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {caseStudy.initialSituation.content}
                </p>
              </div>
            </div>
            {caseStudy.initialSituation.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.initialSituation.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={initialSituationAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Audit Findings Section */}
        {caseStudy.auditFindings && (
          <motion.section 
            ref={auditRef}
            className="mb-16"
            initial="initial"
            animate={auditAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.auditFindings.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-6">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.auditFindings.content}
                </p>
              </div>
            </div>
            {caseStudy.auditFindings.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.auditFindings.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={auditAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Strategy Section */}
        {caseStudy.strategy && (
          <motion.section 
            ref={strategyRef}
            className="mb-16"
            initial="initial"
            animate={strategyAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.strategy.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-8">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.strategy.content}
                </p>
              </div>
            </div>
            {caseStudy.strategy.pillars && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.strategy.pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={strategyAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-lg text-gray-900 dark:text-white">
                          {pillar.title}
                        </h3>
                      </div>
                      {pillar.points && (
                        <ul className="space-y-3 mt-4">
                          {pillar.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Execution Section */}
        {caseStudy.execution && (
          <motion.section 
            ref={executionRef}
            className="mb-16"
            initial="initial"
            animate={executionAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.execution.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-6">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.execution.content}
                </p>
              </div>
            </div>
            {caseStudy.execution.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.execution.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={executionAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Timeline Section */}
        {caseStudy.timeline && (
          <motion.section 
            ref={timelineRef}
            className="mb-16"
            initial="initial"
            animate={timelineAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.timeline.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-8">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.timeline.content}
                </p>
              </div>
            </div>
            {caseStudy.timeline.months && (
              <div className="space-y-6">
                {caseStudy.timeline.months.map((month, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-[1.02] dark:bg-dark-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={timelineAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            {month.month}
                          </h3>
                          <div className="space-y-3">
                            <div>
                              <span className="font-semibold text-gray-900 dark:text-white">Focus: </span>
                              <span className="text-gray-700 dark:text-gray-300">{month.focus}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 dark:text-white">Actions: </span>
                              <span className="text-gray-700 dark:text-gray-300">{month.actions}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Results Section */}
        {caseStudy.results && (
          <motion.section 
            ref={resultsRef}
            className="mb-16"
            initial="initial"
            animate={resultsAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.results.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-8">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.results.content}
                </p>
              </div>
            </div>
            {caseStudy.results.metrics && (
              <>
                {caseStudy.results.metrics[0]?.previous ? (
                  <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-6">
                    <div className="rounded border border-dashed border-gray-100 overflow-hidden dark:border-borderColor-dark">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-dark-200">
                              <th className="border-b border-gray-300 dark:border-gray-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                                Metric
                              </th>
                              <th className="border-b border-gray-300 dark:border-gray-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                                Previous 6 months
                              </th>
                              <th className="border-b border-gray-300 dark:border-gray-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                                Last 6 months
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {caseStudy.results.metrics.map((metric, index) => (
                              <motion.tr 
                                key={index}
                                className="hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                animate={resultsAnimation}
                                variants={fadeUpAnimation}
                                transition={{ delay: index * 0.1 }}
                              >
                                <td className="border-b border-gray-200 dark:border-gray-700 p-4 font-semibold text-gray-900 dark:text-white">
                                  {metric.label}
                                </td>
                                <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-gray-700 dark:text-gray-300">
                                  {metric.previous}
                                </td>
                                <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-primary font-semibold">
                                  {metric.current}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-1">
                    {caseStudy.results.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={resultsAnimation}
                        variants={fadeUpAnimation}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-900/10">
                          <div className="text-4xl font-bold text-primary mb-3">
                            {metric.value}
                          </div>
                          <div className="text-gray-700 dark:text-gray-300 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
            {caseStudy.results.summary && (
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark bg-primary-50/50 dark:bg-primary-900/10">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{caseStudy.results.summary}</p>
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Business Impact Section */}
        {caseStudy.businessImpact && (
          <motion.section 
            ref={impactRef}
            className="mb-16"
            initial="initial"
            animate={impactAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.businessImpact.title}
            </h2>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 mb-6">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.businessImpact.content}
                </p>
              </div>
            </div>
            {caseStudy.businessImpact.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.businessImpact.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={impactAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Insights Section */}
        {caseStudy.insights && (
          <motion.section 
            ref={insightsRef}
            className="mb-16"
            initial="initial"
            animate={insightsAnimation}
            variants={fadeUpAnimation}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {caseStudy.insights.title}
            </h2>
            {caseStudy.insights.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.insights.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 dark:bg-dark-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={insightsAnimation}
                    variants={fadeUpAnimation}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Ongoing Work Section */}
        {caseStudy.ongoingWork && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {caseStudy.ongoingWork.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.ongoingWork.content}
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        {caseStudy.cta && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-900/10 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {caseStudy.cta.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {caseStudy.cta.content}
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary inline-block transition-transform duration-300 hover:scale-105"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </article>
  );
}

