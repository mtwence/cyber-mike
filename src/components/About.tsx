import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Image from 'next/image'
import { PageDetails } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageDetails: PageDetails;
};

function About({pageDetails}: Props){
  if (!pageDetails) {
    return null;
  }

  return (
    <div className='flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='headings'>About</h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className='relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      >
        <Image  
          src={urlFor(pageDetails.profilePic).url()}
          alt="Profile"
          fill
          sizes="(max-width: 768px) 224px, (max-width: 1200px) 256px, 500px"
          className='rounded-full object-cover md:rounded-lg'
          priority
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semi-bold text-stone-500'>{pageDetails.backgroundInformation}</h4>
      </div>
    </div>
  )
}

export default About