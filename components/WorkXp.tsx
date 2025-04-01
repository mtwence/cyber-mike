import React from 'react'
import { motion, MotionConfig } from "framer-motion"
import XPCards from './XPCards'
import { Experience} from '@/typings'

type Props = {
  experience: Experience[];
  key?: string;
}

function WorkXp({ experience }: Props) {
  console.log('Experience data:', experience);

  // Sort experiences by startDate in descending order
  const sortedExperience = experience?.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA; // Sort from newest to oldest
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-left  md:flex-row max-w-full px-10 justify-center mx-auto items-center overflow-hidden'>
      <h3 className='headings'>Experience</h3>
      
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-16 mb-16 justify-center'>
        {sortedExperience?.map((exp) => (
          <XPCards key={exp._id} experience={exp} />
        ))}
      </div>


    </motion.div>

  )
}

export default WorkXp

