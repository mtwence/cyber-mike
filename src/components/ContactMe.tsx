import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from "react-hook-form"
import { PageDetails } from '@/typings'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {
  pageDetails: PageDetails;
}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactMe({ pageDetails }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true);
    window.location.href = `mailto:${pageDetails.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center mt-32 sm:mt-40'
    >
      <h3 className='headings absolute top-16 sm:top-20'>Get In Touch</h3>

      <div className='flex flex-col space-y-6 sm:space-y-10 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[600px]'>
        <div className='flex flex-col space-y-6 sm:space-y-8'>
          <div className='flex items-center space-x-3 sm:space-x-5 justify-center'>
            <MapPinIcon className='text-[#065f46] h-6 w-6 sm:h-7 sm:w-7 animate-pulse'/> 
            <p className='text-base sm:text-xl text-[#065f46] font-game'>{pageDetails?.address}</p>
          </div>
          <div className='flex items-center space-x-3 sm:space-x-5 justify-center'>
            <PhoneIcon className='text-[#065f46] h-6 w-6 sm:h-7 sm:w-7 animate-pulse'/>
            <p className='text-base sm:text-xl text-[#065f46] font-game'>{pageDetails?.phoneNumber}</p>
          </div>
          <div className='flex items-center space-x-3 sm:space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#065f46] h-6 w-6 sm:h-7 sm:w-7 animate-pulse'/>
            <p className='text-base sm:text-xl text-[#065f46] font-game'>{pageDetails?.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
          <div className='flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0'>
            <input placeholder='Name' {...register('name')} type="text" className='contact w-full' />
            <input placeholder='Email' {...register('email')} type="email" className='contact w-full' />
          </div>

          <input placeholder='Subject' {...register('subject')} type="text" className='contact w-full' />
          <textarea placeholder='Message' {...register('message')} className='contact w-full'></textarea>
          <button type='submit' className='bg-amber-200 text-base sm:text-lg rounded-lg px-4 sm:px-6 py-3 sm:py-6 uppercase text-emerald-800 font-medium font-arcade hover:bg-amber-300 w-full sm:w-auto'>Send It! &#128640;</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMe
