import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const industries = [
    {
      id: 1,
      name: 'Defensa y Seguridad',
      description: 'Aplicaciones especializadas en sistemas de defensa y equipos de seguridad avanzados.',
      icon: '🛡️',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      name: 'Aeroespacial',
      description: 'Componentes de alta performance para la industria aeronáutica y espacial.',
      icon: '🚀',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Energía',
      description: 'Soluciones para sistemas de energía renovable y almacenamiento eficiente.',
      icon: '⚡',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'Electrónica',
      description: 'Materiales conductivos para dispositivos electrónicos de nueva generación.',
      icon: '💻',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      name: 'Catálisis',
      description: 'Catalizadores avanzados para procesos químicos e industriales eficientes.',
      icon: '⚗️',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 6,
      name: 'Medicina',
      description: 'Aplicaciones biomédicas con propiedades antimicrobianas y biocompatibles.',
      icon: '🏥',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Industrias que Atendemos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros nanometales tienen aplicaciones en múltiples sectores industriales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{industry.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {industry.name}
                </h3>

                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;