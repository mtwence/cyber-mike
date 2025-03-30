import React from 'react'
import { motion } from "framer-motion"
import type { Skill as SkillType } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
    key?: string;
}

function Skill({directionLeft, skill}: Props) {
  console.log('Skill data:', skill);
  
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200:200,
            opacity:0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        src={urlFor(skill.skillImage).url()}
        alt={skill.title}
        className='rounded-full border-2 border-emerald-800 w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-amber-50 h-24 w-24 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg font-bold text-stone-600'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill