import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;
      const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-corporate-200/30 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-nano-blue-500 to-nano-blue-600"
        style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

export default ScrollProgress;