import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
type Props = {}

function ContactMe({}: Props){
    return (<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='headings'>Get in Touch</h3>

    <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center text-amber-300'>
            Drop me a line.{" "}
        </h4>
        <h4 className=' text-4xl font-semibold text-center text-amber-300 decoration-[#065f46]/75 underline'>I'd love to connect. </h4>
        <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#065f46] h-7 w-7 animate-pulse'/>
            <p className='text-2xl text-[#065f46] '>+1 (856) 685-6120</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#065f46] h-7 w-7 animate-pulse'/>
            <p className='text-2xl text-[#065f46] '>michaelwence@proton.me</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#065f46] h-7 w-7 animate-pulse'/>
            <p className='text-2xl text-[#065f46] '>Greater Philadelphia Area</p>
        </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto' action="">
            <div className='flex space-x-2'>
                <input type="text" className='contact' />
                <input type="text" className='contact' />
            </div>

            <input type="text" className='contact' />
            <textarea className='contact'></textarea>
            <button>Send It!</button>
        </form>
    </div>
    </div>
    );
}

export default ContactMe;
