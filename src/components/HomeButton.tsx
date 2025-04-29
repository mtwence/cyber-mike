import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, useRef } from 'react';

type Props = {};

export default function HomeButton({}: Props) {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-y');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = window.innerHeight;
      const shouldShow = scrollTop > viewportHeight * 0.5;
      
      console.log('Scroll position:', scrollTop);
      console.log('Should show button:', shouldShow);
      
      setShowButton(shouldShow);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener to the scroll container
    scrollContainer.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('Current showButton state:', showButton);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-0 right-0 z-[999]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex justify-center">
              <Link href="/#hero">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-emerald-800/60 p-3 rounded-full cursor-pointer hover:bg-amber-300 transition-colors duration-200"
                >
                  <HomeIcon className="h-6 w-6 text-emerald-800 group-hover:text-amber-300" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}