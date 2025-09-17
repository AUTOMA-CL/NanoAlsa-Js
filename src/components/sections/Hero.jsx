import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700"
      style={{
        backgroundImage: 'url(/images/hero2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NanoAlsa
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nanometales de Alta Pureza
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Especialistas en Nano Cobre y Nano Plata para aplicaciones industriales y tecnológicas avanzadas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Conoce Nuestros Productos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;