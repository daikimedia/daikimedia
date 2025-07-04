'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import PricingCards from './PricingCards'


export const metadata = {
  title: "Pricing | Daiki Media",
  description:
    "Discover the pricing plans for Daiki Media's services. Choose the best plan that fits your business needs and start growing with expert digital marketing and analytics solutions.",
  keywords:
    "Daiki Media, pricing, digital marketing, analytics, business solutions, pricing plans, affordable marketing services",
};

const PricingV2 = ({
  className = 'pt-150',
  showPricingText = true,
  largeTitle = false,
  pricingDescription = false,
}) => {
  const [isAnnual, setIsAnnual] = useState(false)
  return (
    <section className={cn('relative -z-0 overflow-hidden bg-white dark:bg-dark-300', className)}>
      <div className="container">
        <div className={`${largeTitle ? 'max-w-[900px]' : ''} z-100 relative mx-auto mb-12 text-center`}>
          <div className={cn(showPricingText ? '' : 'hidden')}>
            <p className="section-tagline">Customizable pricing</p>
            {largeTitle ? (
              <h1>Choose the right plan for your business</h1>
            ) : (
              <h2>Adaptable pricing, outstanding value.</h2>
            )}
            {pricingDescription ? (
              <p className="mb-12 mt-10">
                Whether you&lsquo;re an individual, a small team, or a growing enterprise, we have a <br /> plan that
                aligns perfectly with your goals.
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="pricing mt-4">
            <label className="relative z-[110] inline-flex cursor-pointer items-center">
              <span className="mr-2.5 text-base font-semibold text-paragraph dark:text-white">Monthly</span>
              <input
                type="checkbox"
                id="priceCheck"
                className="peer sr-only"
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="relative h-[34px] w-15 rounded-[20px] bg-paragraph before:absolute  before:left-1/2 before:top-1/2 before:h-[calc(100%-10px)] before:w-[calc(100%-10px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[20px]  before:border before:border-dashed before:border-white/40 before:content-[''] after:absolute after:start-[5px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-primary after:transition-all after:content-[''] peer-checked:after:start-[7px] peer-checked:after:translate-x-full "></div>
              <span className="ms-2.5 text-base font-semibold text-paragraph dark:text-white">Yearly</span>
            </label>
          </div>
        </div>
        {/* Pricing Cards */}
        <PricingCards isAnnual={isAnnual} version={true} />
      </div>
    </section>
  )
}

export default PricingV2
