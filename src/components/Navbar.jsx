'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255, 255, 255)',
    },
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255, 255, 255)',
    },
  }
  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: '0',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LINKS  */}
      <div className='hidden md:flex gap-4 w-1/3 text-xl'>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className={`rounded p-1 ${
              pathName === link.url && 'bg-black text-white'
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* LOGO  */}
      <div className='md:hidden lg:flex w-1/3justify-center'>
        <Link
          href='/'
          className='text-md bg-black rounded-md p-1 font-semibold flex gap-1 items-center justify-center'
        >
          <span className='text-white'>Sulaimon</span>
          <span className='h-8 rounded bg-white text-black flex items-center justify-center p-1'>
            Omotosho
          </span>
        </Link>
      </div>

      {/* SOCIAL MEDIA  */}
      <div className='hidden md:flex gap-4 justify-end w-1/3'>
        <Link href='https://github.com/Sulaimon-Omotosho' target='_blank'>
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>
        {/* <Link href='#'>
          <Image src='/dribbble.png' alt='' width={24} height={24} />
        </Link>
        <Link href='#'>
          <Image src='/instagram.png' alt='' width={24} height={24} />
        </Link> */}
        {/* <Link href='#'>
          <Image src='/facebook.png' alt='' width={24} height={24} />
        </Link> */}
        {/* <Link href='#'>
          <Image src='/pinterest.png' alt='' width={24} height={24} />
        </Link> */}
        <Link
          href='https://www.linkedin.com/in/sulaimon-omotosho/'
          target='_blank'
        >
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>
      </div>

      {/* MENU  */}
      <div className='md:hidden'>
        {/* MENU BUTTON  */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10'
          >
            {links.map((link, idx) => (
              <motion.div variants={listItemVariants} key={idx} className=''>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            {/* SOCIAL MEDIA  */}
            <div className='bg-white flex h-fit w-fit px-6 py-2 rounded-xl gap-3 mt-16'>
              <Link href='https://github.com/Sulaimon-Omotosho' target='_blank'>
                <Image src='/github.png' alt='' width={36} height={36} />
              </Link>
              {/* <Link href='#'>
          <Image src='/dribbble.png' alt='' width={24} height={24} />
        </Link>
        <Link href='#'>
          <Image src='/instagram.png' alt='' width={24} height={24} />
        </Link> */}
              {/* <Link href='#'>
          <Image src='/facebook.png' alt='' width={24} height={24} />
        </Link> */}
              {/* <Link href='#'>
          <Image src='/pinterest.png' alt='' width={24} height={24} />
        </Link> */}
              <Link
                href='https://www.linkedin.com/in/sulaimon-omotosho/'
                target='_blank'
              >
                <Image src='/linkedin.png' alt='' width={36} height={36} />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
