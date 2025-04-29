import React from 'react'
import Image from 'next/image'
import { Project } from '../typings'
import { urlFor } from '../utils/sanity'
import styles from './Projects.module.css'

type Props = {
  projects: Project[];
}

function Projects({ projects }: Props) {
  if (!projects) {
    return null;
  }

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:text-left xl:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='headings'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-32 sm:mt-40 md:mt-48 mb-16 px-4 sm:px-0 scrollbar-thin scrollbar-thumb-emerald-500/50 hover:scrollbar-thumb-amber-300 scrollbar-track-transparent'>
        {projects.map((project) => {
          const projectImageUrl = urlFor(project.projectImage).url();
          return (
            <div 
              key={project._id} 
              className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center h-[calc(100vh-8rem)] relative group px-4 sm:px-0'
            >
              <div className='relative w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] mb-4'>
                <Image 
                  src={projectImageUrl}
                  alt={project.projectTitle}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 500px"
                  className='object-contain'
                />
              </div>
              <div className='space-y-4 w-full max-w-2xl text-center relative p-4'>
                <div className='absolute inset-0 bg-amber-50/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg shadow-lg'></div>
                <div className='relative z-10'>
                  <h4 className='text-stone-500 text-xl sm:text-2xl font-bold'>{project.projectTitle}</h4>
                  <p className='text-stone-600 text-sm sm:text-base'>{project.summary}</p>
                  <div className='flex flex-wrap justify-center gap-2 my-4'>
                    {project.technologies.map((tech) => {
                      const techImageUrl = urlFor(tech.skillImage).url();
                      return (
                        <div key={tech._id} className='relative h-6 w-6 sm:h-8 sm:w-8'>
                          <Image
                            src={techImageUrl}
                            alt={tech.skillTitle}
                            fill
                            sizes="(max-width: 640px) 24px, 32px"
                            className='rounded-full object-contain'
                          />
                        </div>
                      );
                    })}
                  </div>
                  <ul className='list-disc list-inside text-stone-600 space-y-2 text-sm sm:text-base'>
                    {project.points && project.points.length > 0 ? (
                      project.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))
                    ) : (
                      <li>No points available for this project.</li>
                    )}
                  </ul>
                  <div className='flex space-x-4 justify-center mt-6 mb-2'>
                    {project.websiteLink && (
                      <a 
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-emerald-800 rounded-full hover:bg-amber-300 transition-colors duration-200'
                      >
                        <svg 
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-50" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                          />
                        </svg>
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-emerald-800 rounded-full hover:bg-amber-300 transition-colors duration-200'
                      >
                        <svg 
                          className="w-5 h-5 sm:w-6 sm:h-6 text-amber-50" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Projects