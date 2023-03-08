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
            <BackgroundCircles/>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#ea580c' />
            </h1>
        </div> 
    )
}

export default Hero