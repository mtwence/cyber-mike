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
            <div className='absolute border border-stone-300 rounded-full h-[300px] w-[300px] mt-52 animate-spin-slow'> 
                <div className='flex h-[30px] w-[30px] rounded-full bg-stone-300 '></div>
            </div>
            <div className='absolute border border-stone-700 rounded-full h-[600px] w-[600px] mt-52 '/>
            <div className='absolute border border-orange-600 rounded-full h-[850px] w-[850px] mt-52 animate-pulse opacity-20' />
            <div className='absolute border border-stone-700 rounded-full h-[1200px] w-[1200px] mt-52' />
        </motion.div>
    )
}

export default BackgroundCircles