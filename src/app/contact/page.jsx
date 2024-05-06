'use client'

import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        }
      )
  }

  const text = 'Message  Me'

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className='h-full'
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER  */}
        <div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div className=''>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER  */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-2/3 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 lg:gap-8 justify-center p-24'
        >
          <span>Dear Sulaimon,</span>
          <div className='flex flex-col'>
            <span className=''>My Name is</span>
            <input
              type='text'
              name='user_name'
              className='bg-transparent border-b-2 border-b-black outline-none z-20'
            />
          </div>
          <div className='flex flex-col'>
            <textarea
              name='user_message'
              placeholder='Type Your Message'
              rows='6'
              className='bg-transparent border-b-2 border-b-black outline-none lg:resize-none'
            />
          </div>
          <div className='flex flex-col'>
            <span>My Email:</span>
            <input
              name='user_email'
              type='email'
              className='bg-transparent border-b-2 border-b-black outline-none'
            />
          </div>
          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>
            Send
          </button>
          {success && (
            <span className='text-green-600 font-semibold'>
              Message sent successfully!
            </span>
          )}
          {error && (
            <span className='text-red-600 font-semibold'>
              Message not sent!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage
