import React from 'react'
import { motion, MotionConfig } from "framer-motion"

type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200:200,
            opacity:0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className='rounded-full border-2 border-emerald-800 w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 filter group-hover:grayscale transition duration-300 ease-in-out'

        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-amber-50 h-24 w-24 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg font-bold text-stone-600'>Intermediate</p>
            </div>
        </div>
    </div>
  )
}

export default Skill