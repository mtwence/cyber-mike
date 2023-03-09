import React from 'react'
import { motion, MotionConfig } from "framer-motion"

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[.1,.2,.4,.8,.1, 1],
            borderRadius:["20%", "20%","50%","80%","20%"]
        }}
        transition={{
            duration:2
        }}
        className='relative flex justify-center items-center'>
            <div className='absolute border border-stone-500 rounded-full h-[1300px] w-[1300px] mt-52 '/>
            <div className='absolute border-dotted border-8 border-orange-300 rounded-full h-[1140px] w-[1140px] mt-52 animate-pulse opacity-20' />
            <div className='absolute border border-stone-300 rounded-full h-[850px] w-[850px] mt-52 animate-spin-slow'> 
                <div className='flex h-[48px] w-[48px] rounded-full bg-amber-300 animate-spin-slow'>
                    <div className='flex h-[16px] w-[16px] rounded-full bg-stone-100 -m-4'></div>
                </div>
            </div>
             <div className='absolute border border-stone-300 rounded-full h-[1325px] w-[1325px] mt-52 animate-reverse-spin z-10'> 
                <div className='flex h-[96px] w-[96px] rounded-full bg-amber-600 animate-spin-slower'>
                    <div className='flex h-[32px] w-[32px] rounded-full bg-black -m-12 animate-spin'>
                        <div className='flex h-[8px] w-[8px] rounded-full bg-stone-100 -m-4'></div>
                    </div>
                </div>
                <div className='absolute border border-stone-500 rounded-full h-[128px] w-[128px] -ml-4 -mt-28 '/>
                <div className='absolute border border-stone-500 rounded-full h-[168px] w-[168px] -ml-[36px] -mt-[132px] '/>
            </div>
            <div className='absolute border-8 border-stone-300 rounded-full h-[1750px] w-[1750px] mt-52 animate-pulse z-0' />
            <div className='absolute border border-amber-200 rounded-full h-[2200px] w-[2200px] mt-52 animate-ping' />
            <div className='absolute border-4 border-double border-yellow-400 rounded-full h-[2000px] w-[2000px] mt-52 animate-pulse ' />
            <div className='absolute border-dashed border-8 border-stone-600 rounded-full h-[2025px] w-[2025px] mt-52 animate-spin-slower' />
            <div className='absolute border-4 border-double border-orange-400 rounded-full h-[2050px] w-[2050px] mt-52 animate-pulse ' />
        </motion.div>
    )
}

export default BackgroundCircles