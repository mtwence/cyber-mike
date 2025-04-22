import React from 'react'
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[]
}

function Skills({ skills }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='headings'>Skills</h3>
        <div className='absolute top-36 flex flex-col items-center'>
          <h3 className='uppercase tracking-[3px] text-stone-500 text-sm mb-2'>Hover over each language for current proficiency</h3>
          <div className='flex space-x-4 text-lg'>
            <p className='text-green-500'>Novice</p>
            <p className='text-orange-500'>Journeyman</p>
            <p className='text-red-500'>Master</p>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-32'>
            {skills?.map((skill, index) => (
                <Skill key={skill._id} directionLeft={index % 2 === 0} skill={skill} />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills