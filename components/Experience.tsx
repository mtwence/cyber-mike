import React from 'react'
import { motion, MotionConfig } from "framer-motion"
import XPCards from './XPCards'

type Props = {}

function Experience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-left  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden'>
      <h3 className='headings'>Experience</h3>
      
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-16 mb-16'>
        <XPCards />
        <XPCards />
        <XPCards />
        <XPCards />
      </div>


    </motion.div>

  )
}

export default Experience

