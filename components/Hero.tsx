import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageDetails } from '@/typings'
import {urlFor} from '../sanity'

type Props = {
    pageDetails: PageDetails
}

function Hero({pageDetails }: Props) {
    const [text] = useTypewriter({
        words: [
            `HOWDY, THE NAME'S ${pageDetails?.name}`,
            'AT THE CENTER OF THE UNIVERSE...',
            'IS ME !!!',
            ],
        loop: 0,
        delaySpeed: 2000,
    })
    return (
        <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center'>
            <BackgroundCircles />
            <div className='relative z-10 pointer-events-none'>
                <img src={urlFor(pageDetails?.heroImage).url()} className='relative rounded-full h-48 w-48 mx-auto object-cover' />
                <h2 className='text-md font-medium uppercase text-stone-500 pb-2 tracking-[10px]'>Aspiring Software Developer/Designer</h2>
                <h1>
                    <span id='heroText' className='text-3xl text-orange-500 font-bold font-matrix'>{text}</span>
                    <Cursor cursorColor='black' />
                </h1>
                <div className='pt-5 pointer-events-auto'>
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
        </div>
    )
}

export default Hero

// http://aazealh.net/Divers/Face/Gutsface16.jpg