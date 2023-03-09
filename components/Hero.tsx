import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            'AT THE CENTER OF THE UNIVERSE...',
            'IS ME!!!',
            ],
        loop: 0,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src='http://aazealh.net/Divers/Face/Gutsface16.jpg' className=' relative rounded-full  h-32 w-32 mx-auto object-cover' />
            <h2 className='text-md uppercase text-stone-400 pb-2 tracking-[10px]'>Aspiring Software Developer/Designer</h2>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#ea580c' />
            </h1>
            <div className='pt-5 z-10'>
                <Link href="#about">
                <button className='navButton'>About</button>
                </Link>
                <Link href='#experience'>
                <button className='navButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                <button className='navButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='navButton'>Projects</button>
                </Link>
            </div>
          
        </div>
    )
}

export default Hero