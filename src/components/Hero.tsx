import React, { useState, useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageDetails } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'
import CompanyPopup from './CompanyPopup'
import { FaCog } from 'react-icons/fa'

type Props = {
    pageDetails: PageDetails
}

function Hero({pageDetails }: Props) {
    const [showPopup, setShowPopup] = useState(false);
    const [company, setCompany] = useState<string | null>(null);
    const [isSkipped, setIsSkipped] = useState(false);

    useEffect(() => {
        // Check if company name is already stored
        const storedCompany = localStorage.getItem('visitorCompany');
        const storedSkip = localStorage.getItem('popupSkipped');
        if (!storedCompany && !storedSkip) {
            setShowPopup(true);
        } else if (storedCompany) {
            setCompany(storedCompany);
        } else if (storedSkip) {
            setIsSkipped(true);
        }
    }, []);

    const handleSaveCompany = (companyName: string) => {
        localStorage.setItem('visitorCompany', companyName);
        setCompany(companyName);
    };

    const handleSkip = () => {
        localStorage.setItem('popupSkipped', 'true');
        setIsSkipped(true);
        setShowPopup(false);
    };

    const handleGearClick = () => {
        localStorage.removeItem('visitorCompany');
        localStorage.removeItem('popupSkipped');
        setCompany(null);
        setIsSkipped(false);
        setShowPopup(true);
    };

    const [text] = useTypewriter({
        words: [
            `HOWDY, SPACE COWBOY, THE NAME'S ${pageDetails?.name}`,
            'AT THE CENTER OF THE UNIVERSE...',
            'IS ME !!!',
            ],
        loop: 0,
        delaySpeed: 2000,
    })

    return (
        <>
            {showPopup && (
                <CompanyPopup
                    onClose={handleSkip}
                    onSave={handleSaveCompany}
                />
            )}
            <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center'>
                <BackgroundCircles />
                <div className='relative z-10 pointer-events-none'>
                    <div className='relative h-48 w-48 mx-auto'>
                        <Image 
                            src={urlFor(pageDetails?.heroImage).url()} 
                            alt="Hero"
                            fill
                            sizes="192px"
                            className='rounded-full object-cover'
                        />
                    </div>
                    <h2 className='text-md font-medium uppercase text-stone-300 pb-2 tracking-[10px] flex items-center justify-center'>
                        {company ? (
                            <>
                                <span>Aspiring Employee</span>
                                <span className='text-orange-500 ml-2'>@ {company}</span>
                                <button 
                                    onClick={handleGearClick}
                                    className="ml-10 text-stone-300 hover:text-orange-500 transition-colors pointer-events-auto"
                                >
                                    <FaCog className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                {pageDetails?.role}
                                {isSkipped && (
                                    <button 
                                        onClick={handleGearClick}
                                        className="ml-10 text-emerald-800 hover:text-amber-300 transition-colors pointer-events-auto"
                                    >
                                        <FaCog className="w-5 h-5" />
                                    </button>
                                )}
                            </>
                        )}
                    </h2>
                    <h1>
                        <span id='heroText' className='text-3xl text-amber-500 font-bold font-matrix'>{text}</span>
                        <Cursor cursorColor='black' />
                    </h1>
                    <div className='pt-5 pointer-events-auto'>
                        <Link href="#about">
                            <button className='navButton'>About</button>
                        </Link>
                        <Link href='#experience'>
                            <button className='navButton'>Experience</button>
                        </Link>
                        <Link href='#education'>
                            <button className='navButton'>Education</button>
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
        </>
    )
}

export default Hero

// http://aazealh.net/Divers/Face/Gutsface16.jpg