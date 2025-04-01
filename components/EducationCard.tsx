import React from "react";
import { motion } from "framer-motion";
import { Education } from "@/typings";
import Image from 'next/image';

type Props = {
  education: Education;
};

function EducationCard({ education }: Props) {
  console.log('Education data:', education);
  return (
    <div className="flex flex-col items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[450px] max-h-[700px] snap-center mt-20 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
      <div className="relative w-full h-[250px]">
        <Image
          className="rounded-t-lg object-cover object-center"
          src={education.schoolImage}
          alt={education.school}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-school.png';
          }}
        />
      </div>
      <div className="px-0 md:px-10 pb-3">
        <h4 className="text-stone-500 text-4xl font-light">{education.school}</h4>
        <p className="text-stone-600 font-bold uppercase text-2xl mt-1">{education.concentration}</p>
        <p className="uppercase py-2 text-stone-600">
          Graduated: {education.finishDate}
        </p>
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

export default EducationCard; 