'use client'

import Brain from '@/components/Brain'
import { motion, useInView, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  const itemRef1 = useRef()
  const isItemRefInView1 = useInView(
    itemRef1,
    // { margin: '-100px' },
    { once: true }
  )
  const itemRef2 = useRef()
  const isItemRefInView2 = useInView(
    itemRef2,
    // { margin: '-100px' },
    { once: true }
  )
  const itemRef3 = useRef()
  const isItemRefInView3 = useInView(
    itemRef3,
    // { margin: '-100px' },
    { once: true }
  )

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      {/* CONTAINER  */}
      <div className='h-full overflow-scroll lg:flex ' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:w-1/2'>
          {/* BIO CONTAINER  */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              I bring a lot of experience to the table, having started my
              journey as a freelance web developer. Those entrepreneurial years
              made me use my skills in tackling diverse projects for individuals
              and startups, often with tight deadlines. Now, as a Senior Web
              Developer, I leverage that agility and problem-solving mindset to
              lead complex web development projects.
            </p>
            <span className='italic'>
              Just because something doesn&apos;t do what you planned it to do
              doesn&apos;t mean it&apos;s useless. - Thomas Edison
            </span>

            {/* SIGNATURE  */}
            <div className='self-end'>
              <svg
                width='185'
                height='77'
                viewBox='0 0 334 162'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 152C3.40979 138.255 8.0508 124.533 10.7778 111C14.4995 92.5309 18.6817 74.2261 23 55.8889C25.1711 46.6694 26.9507 37.2687 29.7778 28.2222C30.4778 25.982 31 23.941 31 21.6111C31 19.245 31.3235 26.3446 31.7778 28.6667C35.0998 45.6457 38.9791 62.5369 42.0556 79.6111C44.4257 92.7653 46.5618 105.972 49 119.111C50.5755 127.601 53.601 135.801 54.8889 144.333C55.5657 148.817 56.4446 153.39 56.9444 157.889C57.025 158.613 57.8724 161.169 58 159C59.9082 126.561 54.6702 93.535 52.2222 61.2222C51.1813 47.4815 50.1198 33.5533 50 19.7778C49.9572 14.8582 49.9089 9.91947 50 4.99999C50.0134 4.27373 51 -0.268199 51 2.49999C51 7.06145 52 11.6407 52 16.6111C52 36.8001 54.0441 57.276 58 77.0555C59.2289 83.2001 61 88.2063 61 94.5C61 97.1186 61 98.5691 61 94.8889C61 82.7267 61.6817 70.5154 66 59C67.8322 54.1142 68.3244 48.1074 74.1111 46.5C78.1101 45.3892 87.6992 44.715 90 49.4444C93.856 57.3706 89.7399 68.1704 88 76C86.2584 83.837 80.7881 90.2953 77 97.2222C72.5107 105.431 69.2598 113.629 62.5 120.389C61.3607 121.528 61 120.458 61 119.389C61 113.34 64.3354 107.04 66.7778 101.667C71.133 92.0852 76.4048 85.6971 85 80.4444C89.1623 77.9008 93.2082 74.6181 97.5556 72.4444C102.462 69.9913 96.4349 80.9094 96.0556 82C95.8521 82.5849 91.1369 95.3181 94 95C95.7754 94.8027 97.7068 91.7544 99.2222 90.7778C103.119 88.2663 106.696 85.5623 109.833 82.1111C111.226 80.5796 116.67 76.8707 117 75C117.481 72.2758 123.712 67.2875 117 74C110.838 80.1617 106.99 91.4942 110.222 100.222C112.352 105.973 122.446 105.695 126.833 103.889C133.207 101.264 135.554 93.2708 139 88C141.48 84.207 142.965 81.9485 141 77.5555C139.048 73.1928 139.777 67.5994 137.5 63.5C133.974 57.154 120 63.1449 120 69.1667C120 74.8869 117.74 84.2047 123.222 88C128.136 91.4018 143.19 97.0919 149.222 93.5555C153.676 90.945 158.849 83.4282 159.944 78.5C160.537 75.8357 153.798 85.0615 153 86C150.067 89.4505 148.807 100 155.222 100C158.646 100 160.523 99.7304 161.056 96C161.603 92.165 163.457 87.9415 164.611 84.2778C168.21 72.8537 169.23 63.4533 168 51.4444C166.619 37.9623 163 25.5609 163 11.8889C163 7.73067 162 -1.28292 162 7.61111C162 33.4724 171.042 59.0782 181.889 82.2778C185.442 89.8784 191.776 103.617 196.5 89.4444C197.737 85.7323 198 81.8736 198 78C198 72.6831 199.755 80.1858 199.944 81.8889C200.783 89.4379 206.497 101.413 213.222 91.1111C216.562 85.9947 219.686 80.8886 222.444 75.4444C223.085 74.1798 226.268 65.2222 227.5 65.2222C231.132 65.2222 234.317 80.3825 236 83.2222C239.918 89.8343 245.188 82.5644 248.056 77.6111C251.928 70.9215 254.907 63.8033 258.889 57.1667C260.188 55.001 262 52.4323 262 56.6667C262 63.3635 258.111 70.2383 258.111 76.4444C258.111 77.6199 278.016 72.8247 278.444 72.7222C296.251 68.4664 313.93 64.0117 332 61'
                  stroke='black'
                  stroke-width='3'
                  stroke-linecap='round'
                />
              </svg>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER  */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* TITLE  */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            {/* LIST  */}
            <motion.div
              className='flex gap-4 flex-wrap'
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                ReactJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Typescript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                HTML
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                CSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                TailwindCSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                NextJS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width={50}
              height={50}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER  */}
          <div
            className='flex flex-col gap-12 justify-center pb-48'
            ref={experienceRef}
          >
            {/* TITLE  */}
            <motion.h1
              initial={{ x: '-350px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className='font-bold text-2xl'
            >
              EXPERIENCE
            </motion.h1>
            {/* LIST  */}
            <div className=''>
              {/* ITEM  */}
              <motion.div
                ref={itemRef1}
                initial={{ x: '-350px' }}
                animate={isItemRefInView1 ? { x: 0 } : {}}
                className='flex justify-between h-fit'
              >
                {/* LEFT  */}
                <div className='w-1/3'>
                  {/* PROJECT  */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Senior Web Developer
                  </div>
                  {/* PROJECT DESC  */}
                  <div className='p-3 text-sm italic'>
                    At Kleen Kodah, I spearheaded the development of their
                    website as Senior Web Developer. I ensured smooth operation,
                    addressed any technical issues that arose, and even
                    contributed to their technical documentation.
                  </div>
                  {/* PROJECT DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    Nov 2023
                  </div>
                  {/* PROJECT LINK  */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    kleenkodah.com
                  </div>
                </div>
                {/* CENTER  */}
                <div className='w-1/6'>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE  */}
                    <div className='absolute w-5 h-5 rounded-full ring-2 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'></div>
              </motion.div>
              {/* ITEM  */}
              <motion.div
                ref={itemRef2}
                initial={{ x: '350px' }}
                animate={isItemRefInView2 ? { x: 0 } : {}}
                className='flex justify-between h-fit'
              >
                {/* LEFT  */}
                <div className='w-1/3'></div>
                {/* CENTER  */}
                <div className='w-1/6'>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE  */}
                    <div className='absolute w-5 h-5 rounded-full ring-2 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'>
                  {' '}
                  {/* PROJECT  */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Junior Web Developer
                  </div>
                  {/* PROJECT DESC  */}
                  <div className='p-3 text-sm italic'>
                    I continued my development skills as a Junior Developer at
                    T&G, a tech company specializing in building and managing
                    web applications and websites for startups and established
                    businesses
                  </div>
                  {/* PROJECT DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    June 2022
                  </div>
                  {/* PROJECT LINK  */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Technical & Generational
                  </div>
                </div>
              </motion.div>
              {/* ITEM  */}
              <motion.div
                ref={itemRef3}
                initial={{ x: '-350px' }}
                animate={isItemRefInView3 ? { x: 0 } : {}}
                className='flex justify-between h-fit'
              >
                {/* LEFT  */}
                <div className='w-1/3'>
                  {/* PROJECT  */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Freelancing
                  </div>
                  {/* PROJECT DESC  */}
                  <div className='p-3 text-sm italic'>
                    Leveraging my newfound skills, I jumped into freelance work,
                    tackling quick projects for individuals and startups.
                  </div>
                  {/* PROJECT DATE  */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    Feb 2021
                  </div>
                  {/* PROJECT LINK  */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Freelancer
                  </div>
                </div>
                {/* CENTER  */}
                <div className='w-1/6'>
                  {/* LINE  */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* CIRCLE  */}
                    <div className='absolute w-5 h-5 rounded-full ring-2 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className='w-1/3'></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SVG CONTAINER  */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-20 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
