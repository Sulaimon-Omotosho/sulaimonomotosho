'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Real Estate E-Commerce',
    desc: 'Website Clone. Find your dream home effortlessly on our real estate e-commerce platform. Browse a wide range of properties, from apartments to estates, with ease. Your perfect home is just a click away',
    img: '/Realtor.png',
    link: 'https://realtor-site-v2.vercel.app/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Blog Site',
    desc: 'I created a tech blog website—a one-stop destination for the latest trends, tips, and insights in technology. Stay informed and ahead of the curve with our curated content.',
    img: '/Blog.png',
    link: 'https://kleen-kodah-xaeh.vercel.app/',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'E-Commerce Site',
    desc: 'Developed an elegant e-commerce platform for a jewelry brand, offering a curated collection of exquisite pieces. Browse through stunning designs and find your perfect accessory with ease. Elevate your style with our beautifully crafted jewelry.',
    img: '/Onyiisi.png',
    link: 'https://onyiisitest.vercel.app/',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Portfolio Site',
    desc: 'Crafted a sleek portfolio website for a hairdresser and wig maker, highlighting their skills and services. Discover their expertise effortlessly on this stylish platform.',
    img: '/Peppertea.png',
    link: 'https://peppertea-portfolio.vercel.app/',
  },
]

const PortfolioPage = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'></div>
            {items.map((item, idx) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={idx}
              >
                <div className='flex flex-col gap-6 text-white'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl mt-8'>
                    {item.title}{' '}
                  </h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] xl:w-[580px] xl:h-[360px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  <p className='text-lg w-80 md:w-96 lg:w-[500px] xl:w-[600px]'>
                    {item.desc}{' '}
                  </p>
                  <Link
                    href={item.link}
                    className='flex justify-end '
                    target='_blank'
                  >
                    <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                      View Site
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-8xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
