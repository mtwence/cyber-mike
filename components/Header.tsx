import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, MotionConfig } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
        <motion.div 
          initial={{
          x:-500,
          opacity:0,
          scale: .5
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
          }}
          transition= {{duration:2, type: "spring", bounce:.5}}
          className='flex flex-row items-center' >
            {/* Icons for Socials */}
            <SocialIcon 
            url="https://github.com/mtwence" 
            bgColor='transparent' 
            fgColor='#a8a29e'
            />
            <SocialIcon 
            url="https://www.linkedin.com/in/michael-wence/" 
            bgColor='transparent' 
            fgColor='#a8a29e'
            />
            <SocialIcon 
            url="https://www.instagram.com/gleepys.oeuvres/" 
            bgColor='transparent' 
            fgColor='#a8a29e'
            />
          
        </motion.div>
        <motion.div 
        initial={{
          x: 500,
          opacity:0,
          scale: .5
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1,
          }}
          transition= {{duration: 3, type: "spring", bounce:.5}}
        className='flex flex-row items-center text-stone-400 cursor-pointer'>
          <SocialIcon 
            network="email"
            bgColor='transparent' 
            fgColor='#a8a29e'
            />
          <p className='uppercase hidden md:inline-flex text-sm text-stone-400'>Hit My Line</p>
        </motion.div>
    </header>
  )
}

export default Header