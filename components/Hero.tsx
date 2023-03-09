import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            'Hey now im a rockstar',
            'get your cock hard',
            'go play!!!!'],
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
        </div>
    )
}

export default Hero