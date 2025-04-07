import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import Image from 'next/image';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  console.log('Experience card data:', {
    company: experience.company,
    linkUrl: experience.linkUrl,
    linkTitle: experience.linkTitle,
    hasLinkUrl: !!experience.linkUrl,
    linkUrlType: experience.linkUrl?.type,
    linkUrlValue: experience.linkUrl?.url || experience.linkUrl?.file,
    hasLinkTitle: !!experience.linkTitle
  });
  
  const getLinkUrl = () => {
    if (!experience.linkUrl) return null;
    if (experience.linkUrl.type === "url" && experience.linkUrl.url) {
      return experience.linkUrl.url;
    } else if (experience.linkUrl.type === "file" && experience.linkUrl.file) {
      return experience.linkUrl.file.url;
    }
    return null;
  };

  const hasValidLink = experience.linkUrl && 
    ((experience.linkUrl.type === "url" && experience.linkUrl.url) || 
     (experience.linkUrl.type === "file" && experience.linkUrl.file)) && 
    experience.linkTitle;

  console.log('Link validation:', {
    hasValidLink,
    linkUrl: getLinkUrl(),
    linkTitle: experience.linkTitle
  });

  return (
    <div className="flex flex-col items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[450px] max-h-[700px] snap-center mt-20 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
      <div className="relative w-full h-[250px] md:h-[280px] xl:h-[300px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
          <Image
            className="object-contain w-full h-full p-8"
            src={urlFor(experience.companyImage).url()}
            alt={experience.company}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 450px"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-company.png';
            }}
          />
        </div>
      </div>
      <div className="px-0 md:px-10 pb-3 flex-1 flex flex-col">
        <h4 className="text-stone-500 text-4xl font-light">{experience.company}</h4>
        <p className="text-stone-600 font-bold uppercase text-2xl mt-1">{experience.jobTitle}</p>
        <p className="uppercase py-2 text-stone-600">
          {new Date(experience.startDate).toLocaleDateString()} - {experience.currentlyWorking ? "Present" : new Date(experience.endDate).toLocaleDateString()}
        </p>
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 my-4">
            {experience.technologies.map((tech) => (
              <div key={tech._id} className="relative h-8 w-8">
                <Image
                  src={urlFor(tech.skillImage).url()}
                  alt={tech.skillTitle}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
            ))}
          </div>
        )}
        {experience.points && experience.points.length > 0 && (
          <ul className="list-disc space-y-2 ml-5 text-lg text-stone-500 flex-1">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {hasValidLink && (
          <div className="mt-4 flex justify-center">
            <a 
              href={getLinkUrl() || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-50 bg-emerald-800 rounded-lg hover:bg-amber-300"
            >
              {experience.linkTitle}
              <span className="ml-2">&#128640;</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard; 