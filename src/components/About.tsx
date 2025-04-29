import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Image from 'next/image'
import { PageDetails } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageDetails: PageDetails;
};

export default function About({pageDetails}: Props) {
  if (!pageDetails) {
    return null;
  }

  return (
    <div className='flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center z-20 mt-32 sm:mt-40'>
      <h3 className='headings absolute top-16 sm:top-20'>About</h3>
      <div className='relative -mb-10 sm:-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'>
        <Image  
          src={urlFor(pageDetails.profilePic).url()}
          alt="Profile"
          fill
          sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1200px) 256px, 500px"
          className='rounded-full object-cover md:rounded-lg border-2 border-emerald-800'
          priority
        />
      </div>
      <div className='space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-10 flex flex-col items-center w-full md:w-auto relative z-20 mt-12 md:mt-0'>
        <div className='w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]'>
          <h4 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semi-bold text-stone-800 text-center bg-amber-50 border-2 border-amber-300 rounded-lg p-4 sm:p-6 md:p-8'>{pageDetails.backgroundInformation}</h4>
        </div>
        <div className="w-full md:w-[500px] lg:w-[600px] xl:w-[700px] mt-2 sm:mt-4 relative z-20">
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