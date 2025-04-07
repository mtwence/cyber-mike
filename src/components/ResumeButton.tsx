import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { PageDetails } from '../typings';

const ResumeButton = ({ pageDetails }: { pageDetails: PageDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleLaunch = async () => {
    // Start the wiggle animation
    await controls.start({
      y: '-10%',
      transition: { duration: 0.5, ease: "easeInOut" },
      rotate: [0, -5, 5, 0], // Wiggle effect
    });

    // Move the rocket upwards
    await controls.start({
      y: '-100vh', // Move to the top of the screen
      transition: { duration: 1, ease: "easeInOut" },
    });

    // Open the resume link from pageDetails
    setTimeout(async () => {
      if (pageDetails.resume?.asset?._ref) {
        // The _ref format is: file-{fileId}-{extension}
        const fileId = pageDetails.resume.asset._ref.split('-')[1];
        const resumeUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${fileId}.pdf`;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }

      // Wait for 1500 ms before resetting the animation
      await new Promise(resolve => setTimeout(resolve, 500));

      // Reset the rocket's animation state
      controls.start({ y: 0 }); // Reset to original position without animation
    }, 300); // Delay for the download to trigger
  };

  return (
    <motion.div className="fixed bottom-24 right-20 z-50">
      <motion.button
        className="w-32 h-40 cursor-pointer relative"
        onClick={handleLaunch}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={controls}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src="/rocket.svg"
            alt="Rocket"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.button>
      {isHovered && (
        <motion.span 
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-lg font-bold text-red-500 p-2 z-10 font-arcade animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          Launch Resume
        </motion.span>
      )}
    </motion.div>
  );
};

export default ResumeButton;