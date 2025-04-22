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
        className='relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28'
        >
          <Image
            src={urlFor(skill.skillImage).url()}
            alt={skill.skillTitle}
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1200px) 96px, 112px"
            className='rounded-full border-2 border-emerald-800 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
          />
        </motion.div>
        <div className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out ${getProgressColor(skill.progress)} h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0`}>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-stone-600'>{skill.skillTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill