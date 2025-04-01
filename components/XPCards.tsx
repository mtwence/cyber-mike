import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import Image from 'next/image';

type Props = {
  experience: Experience;
  key?: string;
};

function XPCards({ experience }: Props) {
  console.log('Experience data:', experience);
  return (
    <div className="flex flex-col items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[450px] max-h-[700px] snap-center mt-20 hover:opacity-100 opacity-65 cursor-pointer transition-opacity duration-200 overflow-hidden bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
      <div className="relative w-full h-[250px]">
        <Image
          className="rounded-t-lg object-cover object-center"
          src={experience.companyImage || '/placeholder-company.png'}
          alt={experience.company}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-company.png';
          }}
        />
      </div>
      <div className="px-0 md:px-10 pb-3">
        <h4 className="text-stone-500 text-4xl font-light">{experience.jobTitle}</h4>
        <p className="text-stone-600 font-bold uppercase text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <div key={technology._id} className="relative h-9 w-12">
              <Image
                className="rounded-full object-cover object-center"
                src={urlFor(technology.skillImage).url()}
                alt={technology.skillTitle}
                fill
                sizes="48px"
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-2 text-stone-600">
          {experience.startDate} - {experience.endDate || "Present"}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-lg text-stone-500">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-50 bg-emerald-800 rounded-lg hover:bg-amber-300">
          Learn More
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
        </div>
      </div>
    </div>
  );
}

export default XPCards;

//  <motion.img
//          initial = {{y:-100, opacity:0}}
//          whileInView={{y:0, opacity:1}}
//          transition={{duration:1.5}}
//          viewport={{once:true}}
//         className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'src="https://ehrintelligence.com/images/site/articles/2015-01-22-epic-mayo.jpg" alt=""
//         />
//         <div className='px-0 md:px-10'>
//             <h4 className='text-stone-500 text-4xl font-light'>Quality Manager</h4>
//             <p className='text-stone-600 font-bold uppercase text-2xl mt-1'>Epic Systems</p>
//             <div className='flex space-x-2 my-2'>
//                 {/* Tech Used  */}
//                 {/* Tech Used  */}
//                 {/* Tech Used  */}
//                 <img className='h-9 w-12 rounded-full'src="https://assets.stickpng.com/images/61045e1a9cd69c000418c11b.png" alt="" />
//             </div>
//             <p className='uppercase py-5 text-stone-600'>started-finished</p>

//             <ul className='list-disc space-y-4 ml-5 text-lg text-stone-500'>
//                 <li>Points</li>
//                 <li>Points</li>
//                 <li>Points</li>
//                 <li>Points</li>
//                 <li>Points</li>

//             </ul>
//         </div>
