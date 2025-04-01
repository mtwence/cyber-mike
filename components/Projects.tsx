import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='headings'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-16'>
           {[1, 2, 3].map((project) => (
            <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen'>
                <div className='relative w-[800px] h-[600px]'>
                    <Image 
                        src="/project1.png"
                        alt="Project 1"
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className='object-contain'
                    />
                </div>
                <div className='space-y-4'>
                    <h4 className='text-stone-500 text-2xl font-bold'>Project {project}</h4>
                    <p className='text-stone-600 max-w-2xl text-center'>Project description goes here</p>
                    <div className='flex space-x-2 justify-center'>
                        <div className='relative h-8 w-8'>
                            <Image
                                src="/tech1.png"
                                alt="Technology 1"
                                fill
                                sizes="32px"
                                className='rounded-full object-contain'
                            />
                        </div>
                        <div className='relative h-8 w-8'>
                            <Image
                                src="/tech2.png"
                                alt="Technology 2"
                                fill
                                sizes="32px"
                                className='rounded-full object-contain'
                            />
                        </div>
                    </div>
                    <a 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-amber-50 bg-emerald-800 rounded-lg hover:bg-amber-300'
                    >
                        View Project
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
           ))}
        </div>

        <div className='w-full absolute top-[30%] bg-emerald-800/60 left-0 h-[500px] -skew-y-12 '/>
    </div>
  )
}

export default Projects