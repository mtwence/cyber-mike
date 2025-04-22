import React from 'react'
import { motion } from "framer-motion"
import type { Skill as SkillType } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
    key?: string;
}

function Skill({directionLeft, skill}: Props) {
  const getProgressColor = (progress: string) => {
    switch (progress) {
      case 'novice':
        return 'bg-green-200';
      case 'journeyman':
        return 'bg-orange-200';
      case 'master':
        return 'bg-red-200';
      default:
        return 'bg-amber-50';
    }
  };
  
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div 
        initial={{
            x: directionLeft ? -200:200,
            opacity:0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        className='relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28'
        >
          <Image
            src={urlFor(skill.skillImage).url()}
            alt={skill.skillTitle}
            fill
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, (max-width: 1280px) 96px, 112px"
            className='rounded-full border-2 border-emerald-800 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
          />
        </motion.div>
        <div className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out ${getProgressColor(skill.progress)} h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 rounded-full z-0`}>
            <div className='flex items-center justify-center h-full'>
                <p className='text-[10px] sm:text-xs md:text-sm font-bold text-stone-600 px-2 text-center'>{skill.skillTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill