import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Excelencia en Nanotecnología
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            NanoAlsa es una empresa chilena especializada en la producción de nanometales de alta pureza,
            enfocada en aplicaciones industriales y de investigación avanzada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">Cu</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nano Cobre</h3>
            <p className="text-gray-600">
              Partículas de cobre de tamaño nanométrico con propiedades únicas para aplicaciones industriales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gray-600">Ag</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nano Plata</h3>
            <p className="text-gray-600">
              Nanopartículas de plata con propiedades antimicrobianas y conductivas excepcionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">🔬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Investigación</h3>
            <p className="text-gray-600">
              Desarrollo continuo e innovación en aplicaciones nanotecnológicas avanzadas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;