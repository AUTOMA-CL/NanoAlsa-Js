import React from 'react';
import { motion } from 'framer-motion';
import { HiBeaker, HiCog, HiLightningBolt, HiGlobe } from 'react-icons/hi';

const Research = () => {
  const capabilities = [
    {
      icon: HiBeaker,
      title: 'Tecnología Propia',
      description: 'Desarrollo 100% propio de procesos de síntesis nanométrica',
      metrics: 'Patentes registradas'
    },
    {
      icon: HiCog,
      title: 'Libre de Contaminación',
      description: 'Procesos completamente limpios sin contaminantes químicos',
      metrics: '0% contaminación'
    },
    {
      icon: HiLightningBolt,
      title: 'Pureza Superior',
      description: 'Nanometales con pureza excepcional certificada por universidades',
      metrics: '99.99% pureza'
    },
    {
      icon: HiGlobe,
      title: 'Innovación Verde',
      description: 'Proceso físico mecánico sin intervención de químicos',
      metrics: 'Eco-friendly'
    }
  ];

  return (
    <section id="research" className="section bg-corporate-50/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg mb-6">
            Desarrollo <span className="text-nano-blue-600">NanoAlsa</span>
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto">
            Tecnología propia desarrollada con los más altos estándares de pureza y calidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-nano-blue-100 text-nano-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <capability.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-corporate-900 mb-2">
                {capability.title}
              </h3>
              <p className="text-corporate-600 mb-3">
                {capability.description}
              </p>
              <div className="text-sm font-medium text-nano-blue-600">
                {capability.metrics}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-corporate text-center"
        >
          <h3 className="text-2xl font-bold text-corporate-900 mb-4">
            Tecnología de Vanguardia
          </h3>
          <p className="text-corporate-600 mb-6">
            NanoAlsa ha desarrollado sus nanometales a partir de tecnología propia, utilizando procesos 100% libres de contaminación que garantizan la máxima pureza y calidad en cada partícula producida. Nuestra innovación representa un avance significativo en la industria nanotecnológica mundial.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-600 mb-2">100%</div>
              <div className="text-sm text-corporate-600">Tecnología Propia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-600 mb-2">0%</div>
              <div className="text-sm text-corporate-600">Contaminación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-corporate-600">Pureza Máxima</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;