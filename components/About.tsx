import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <div className='flex flex-column text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='headings'>About</h3>
        <motion.div
            initial={{
                x:-200,
                opacity:0
            }}
            whileInView={{x:0, opacity:100}}
            transition={{duration:1}}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        >
            <Image 
                src='https://images.saymedia-content.com/.image/t_share/MTc2MjQ5NTYwNTQzMzQwNDIz/netflix-needs-to-keep-the-smoking-in-their-live-action-adaptation-of-cowboy-bebop.jpg'
                alt="Profile"
                width={500}
                height={600}
                className='rounded-full object-cover md:rounded-lg'
            />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10 '>
            <h4 className='text-4xl font-semi-bold text-stone-500'>A little blurb on meself</h4>
        </div>
    </div>
  )
}

export default About