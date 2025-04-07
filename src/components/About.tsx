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
    <div className='flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center z-20'>
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
          className='rounded-full object-cover md:rounded-lg border-2 border-emerald-800'
          priority
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10 flex flex-col items-center w-full md:w-auto relative z-20'>
        <h4 className='text-4xl font-semi-bold text-stone-500'>{pageDetails.backgroundInformation}</h4>
        <div className="w-full md:w-[400px] mt-8 relative z-20">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5oMzmPEqco2Rw0FPxgLu3D?utm_source=generator"
            width="100%"
            height="120"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg relative z-20"
          />
        </div>
      </div>
    </div>
  )
}

export default About