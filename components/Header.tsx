import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, MotionConfig } from "framer-motion"

type Props = {}

function Header({ }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: .5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 2, type: "spring", bounce: .5 }}
        className='flex flex-row items-center' >
        {/* Icons for Socials */}
        <SocialIcon
          url="https://github.com/mtwence"
          bgColor='transparent'
          fgColor='#065f46'
          className="socials"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/michael-wence/"
          bgColor='transparent'
          fgColor='#065f46'
          className="socials"
        />
        <SocialIcon
          url="https://www.instagram.com/gleepys.oeuvres/"
          bgColor='transparent'
          fgColor='#065f46'
          className="socials"
        />

      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: .5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 2, type: "spring", bounce: .5 }}
        className='flex flex-row items-center text-#065f46 cursor-pointer hover:bg-amber-300 hover:rounded-lg'>
    
        <SocialIcon
          network="email"
          bgColor='transparent'
          fgColor='#065f46'

        />
          <p className='uppercase hidden md:inline-flex text-sm text-emerald-800 mr-4 font-medium font-arcade '>Hit My Line :)</p>
      </motion.div>
    </header>
  )
}

export default Header