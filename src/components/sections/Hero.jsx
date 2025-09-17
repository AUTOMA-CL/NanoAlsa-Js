import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiChevronRight, HiStar } from 'react-icons/hi';
import { heroStats, companyInfo } from '../../data/content';

const Hero = () => {
  const handleCTAClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-start justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-corporate-50/30 to-nano-blue-50/50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-nano-blue-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-nano-copper-200/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 hidden lg:block">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full"
        >
          <img
            src="/images/hero2.png"
            alt="Nanotecnología NanoAlsa"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-white/20" />
        </motion.div>
      </div>

      <div className="container relative mt-16">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-display-lg text-balance leading-tight">
                <span className="block">{companyInfo.heroTitle}</span>
                <span className="block text-nano-blue-600 mt-2">
                  {companyInfo.heroSubtitle}
                </span>
              </h1>

              <p className="text-xl text-corporate-600 max-w-3xl leading-relaxed">
                {companyInfo.heroDescription}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => handleCTAClick('#products')}
                className="btn btn-primary btn-lg group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explorar Productos
                <HiChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-corporate-500 mb-4">
                Certificado por instituciones líderes
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-sm font-medium text-corporate-600">PUC</div>
                <div className="text-sm font-medium text-corporate-600">USACH</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-corporate-200/50"
      >
        <div className="container py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-nano-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-corporate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-corporate-500">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 lg:bottom-32"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-corporate-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-corporate-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;