import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='headings'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-16'>
           {projects.map((project, i ) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  h-screen '>
                <img src="https://user-images.githubusercontent.com/107210172/184045305-9395269e-39f0-4d2b-be3d-e71c7f1cfab7.png" alt="" />
                <div><h4 className='text-stone-500'>Project {i+1} of {projects.length}: Let's Play</h4></div>
            </div>
           
          )) }

        </div>

        <div className='w-full absolute top-[30%] bg-emerald-800/60 left-0 h-[500px] -skew-y-12 '/>

    </div>
  )
}

export default Projects