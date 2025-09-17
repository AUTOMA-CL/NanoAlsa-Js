import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiDownload, HiDocumentText } from 'react-icons/hi';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const documents = [
    {
      id: 1,
      title: 'Propiedades del Nano Cobre',
      description: 'Estudio detallado de las propiedades físicas y químicas del nano cobre.',
      type: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Aplicaciones de Nano Plata',
      description: 'Investigación sobre aplicaciones industriales y médicas de la nano plata.',
      type: 'PDF',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Métodos de Síntesis',
      description: 'Documentación técnica sobre procesos de producción de nanometales.',
      type: 'PDF',
      size: '4.2 MB'
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Investigación y Desarrollo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a nuestra documentación técnica y estudios de investigación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <HiDocumentText className="w-8 h-8 text-blue-600 mr-3" />
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  {doc.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {doc.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {doc.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{doc.size}</span>
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <HiDownload className="w-4 h-4 mr-2" />
                  Descargar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            ¿Necesitas documentación específica o información técnica adicional?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contacta con Nuestros Expertos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;