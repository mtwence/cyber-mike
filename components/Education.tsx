import React from 'react'
import { motion } from "framer-motion"
import EducationCard from './EducationCard'
import type { Education } from '@/typings'

type Props = {
  education: Education[];
}

function Education({ education }: Props) {
  console.log('Education data:', education);

  // Sort education by finishDate in descending order
  const sortedEducation = education?.sort((a, b) => {
    const dateA = new Date(a.finishDate).getTime();
    const dateB = new Date(b.finishDate).getTime();
    return dateB - dateA; // Sort from newest to oldest
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center overflow-hidden'>
      <h3 className='headings'>Education</h3>
      
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-16 mb-16 justify-center'>
        {sortedEducation?.map((edu) => (
          <EducationCard key={edu._id} education={edu} />
        ))}
      </div>
    </motion.div>
  )
}

export default Education 