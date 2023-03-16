import React from 'react'
import { motion, MotionConfig } from "framer-motion"

https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Ffans-are-losing-their-minds-over-the-first-look-at-netflixs-cowboy-bebop%2Fintro-1629733339.jpg&imgrefurl=https%3A%2F%2Fwww.looper.com%2F494584%2Ffans-are-losing-their-minds-over-the-first-look-at-netflixs-cowboy-bebop%2F&tbnid=jPfk2yT7R-EKNM&vet=12ahUKEwjd37Ot9M_9AhWbCVkFHUPLA5EQMygDegUIARCvAQ..i&docid=KRHZ3hfOxF8iXM&w=780&h=438&q=spike%20smoking%20a%20cig&ved=2ahUKEwjd37Ot9M_9AhWbCVkFHUPLA5EQMygDegUIARCvAQ

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-column text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='headings'>About</h3>
        <motion.img 
            src='https://images.saymedia-content.com/.image/t_share/MTc2MjQ5NTYwNTQzMzQwNDIz/netflix-needs-to-keep-the-smoking-in-their-live-action-adaptation-of-cowboy-bebop.jpg'
            initial = {{
                x:-200,
                opacity:0
            }}
            whileInView={{x:0, opacity:100}}
            transition={{duration:1}}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10 '>
            <h4 className='text-4xl font-semi-bold text-stone-500'>A little blurb on meself</h4>
        </div>
    </div>

  )
}

export default About