import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
name: string;
email: string;
subject: string;
message: string;
};
type Props = {}

    

function ContactMe({}: Props){

    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:michaelwence@proton.me?subject=${formData.subject}&body=Howdy there, my name is ${formData.name}. 
        
        ${formData.message}`
    }

    return (<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='headings'>Get in Touch</h3>

    <div className='flex flex-col space-y-10'>
        {/* <h4 className='text-4xl font-semibold text-center text-amber-300'>
            Drop me a line.{" "}
        </h4> */}
        {/* <h4 className=' text-4xl font-semibold text-center text-amber-300 decoration-[#065f46]/75 underline'>I'd love to connect. </h4> */}
        
        <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#065f46] h-7 w-7 animate-pulse'/>
            <p className='text-xl text-[#065f46] font-game'>Greater Philadelphia Area</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#065f46] h-7 w-7 animate-pulse'/>
            <p className='text-xl text-[#065f46] font-game'>+1 (856) 685-6120</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#065f46] h-7 w-7 animate-pulse '/>
            <p className='text-xl text-[#065f46] font-game'>michaelwence@proton.me</p>
        </div>
      

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' action="">
            <div className='flex space-x-2'>
                <input placeholder='Name' {...register('name')}  type="text" className='contact' />
                <input placeholder='Email' {...register('email')}  type="email" className='contact' />
            </div>

            <input placeholder='Subject' {...register('subject')} type="text" className='contact' />
            <textarea placeholder='Message' {...register('message')} className='contact'></textarea>
            <button type='submit' className='bg-amber-200 text-lg rounded-lg px-6 py-6 uppercase text-emerald-800 font-medium font-arcade hover:bg-amber-300'>Send It! &#128640;</button>
        </form>
    </div>
    </div>
    );
}

export default ContactMe;
