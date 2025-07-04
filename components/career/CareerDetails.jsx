'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import CareerImage from '@/public/images/about/career.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export const metadata = {
  title: "Career Details | Daiki Media",
  description:
    "Explore exciting career opportunities at Daiki Media. Join our innovative team and be part of shaping the future of digital media and marketing.",
  keywords:
    "Daiki Media, career opportunities, digital media jobs, marketing careers, work with us, join our team, job openings, innovative careers",
};


const CareerDetails = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <motion.div
          className="mb-12 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 max-md:h-[400px]"
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}>
          <Image
            src={CareerImage}
            alt="career banner"
            className="w-full  rounded max-md:h-full max-md:w-auto max-md:object-cover  max-md:object-center"
          />
        </motion.div>
        <div className="mx-auto max-w-[850px]">
          <h2 className="mb-9 max-w-[700px]">Join a committed community driven by shared enthusiasm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra
            vulputate curabitur est.
            <br />
            <br />
            Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan.
            Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus
            commodo amet nec auctor nibh vel mi blandit.
            <br />
            <br />
            Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna
            augue adipiscing.Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh
            vel mi blandit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareerDetails
