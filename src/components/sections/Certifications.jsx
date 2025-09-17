import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      id: 1,
      name: 'PUC',
      fullName: 'Pontificia Universidad Católica de Chile',
      description: 'Validación académica y científica de nuestros procesos de producción.',
      logo: '🎓',
      type: 'Universidad'
    },
    {
      id: 2,
      name: 'USACH',
      fullName: 'Universidad de Santiago de Chile',
      description: 'Certificación de calidad y pureza de nuestros nanometales.',
      logo: '🔬',
      type: 'Universidad'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Certificaciones y Validaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros productos cuentan con el respaldo de prestigiosas instituciones académicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{cert.logo}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {cert.name}
              </h3>

              <h4 className="text-lg text-blue-600 mb-4">
                {cert.fullName}
              </h4>

              <p className="text-gray-600 mb-4">
                {cert.description}
              </p>

              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {cert.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;