import React from "react";
import { motion } from "framer-motion";
import type { Education } from "@/typings";
import Image from 'next/image';
import { urlFor } from '@/sanity';

type Props = {
  education: Education;
};

function EducationCard({ education }: Props) {
  console.log('Education card data:', {
    school: education.school,
    linkUrl: education.linkUrl,
    linkTitle: education.linkTitle,
    hasLinkUrl: !!education.linkUrl,
    linkUrlType: education.linkUrl?.type,
    linkUrlValue: education.linkUrl?.url || education.linkUrl?.file,
    hasLinkTitle: !!education.linkTitle
  });
  
  const getLinkUrl = () => {
    if (!education.linkUrl) return null;
    if (education.linkUrl.type === "url" && education.linkUrl.url) {
      return education.linkUrl.url;
    } else if (education.linkUrl.type === "file" && education.linkUrl.file) {
      return education.linkUrl.file.url;
    }
    return null;
  };

  const hasValidLink = education.linkUrl && 
    ((education.linkUrl.type === "url" && education.linkUrl.url) || 
     (education.linkUrl.type === "file" && education.linkUrl.file)) && 
    education.linkTitle;

  console.log('Link validation:', {
    hasValidLink,
    linkUrl: getLinkUrl(),
    linkTitle: education.linkTitle
  });

  return (
    <div className="flex flex-col items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[450px] max-h-[700px] snap-center mt-20 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden bg-amber-50 border-2 border-amber-300 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700">
      <div className="relative w-full h-[200px] md:h-[250px] xl:h-[280px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
          <Image
            className="rounded-t-lg object-contain w-full h-full p-4"
            src={urlFor(education.schoolImage).url()}
            alt={education.school}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 450px"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-school.png';
            }}
          />
        </div>
      </div>
      <div className="px-0 md:px-10 pb-3">
        <h4 className="text-stone-500 text-4xl font-light">{education.school}</h4>
        <p className="text-stone-600 font-bold uppercase text-2xl mt-1">{education.concentration}</p>
        <p className="uppercase py-2 text-stone-600">
          Graduated: {education.finishDate}
        </p>
        {hasValidLink && (
          <div className="mt-8 flex justify-center">
            <a 
              href={getLinkUrl() || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-50 bg-emerald-800 rounded-lg hover:bg-amber-300"
            >
              {education.linkTitle}
              <span className="ml-2">&#128640;</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationCard; 