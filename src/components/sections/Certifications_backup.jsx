import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiShieldCheck, HiCheckCircle } from 'react-icons/hi';
import { certifications } from '../../data/content';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg mb-6">
            <span className="text-nano-blue-600">Certificación</span> Científica
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto">
            Validación y análisis por instituciones de prestigio internacional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card card-hover p-8"
            >
              <div className="flex items-center mb-6">
                <HiAcademicCap className="w-8 h-8 text-nano-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-corporate-900">
                    {cert.institution}
                  </h3>
                  <p className="text-sm text-corporate-600">
                    {cert.department}
                  </p>
                </div>
              </div>

              <p className="text-corporate-700 mb-4 leading-relaxed">
                {cert.certification}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <HiCheckCircle className="w-4 h-4 text-nano-blue-600 mr-2" />
                  <span className="text-corporate-600">{cert.method}</span>
                </div>

                <div className="flex items-center text-sm">
                  <HiShieldCheck className="w-4 h-4 text-nano-blue-600 mr-2" />
                  <span className="text-corporate-600">{cert.accreditation}</span>
                </div>

                {cert.date && (
                  <div className="text-xs text-corporate-500 mt-2">
                    Fecha: {cert.date}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-corporate-50/50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-corporate-900 mb-6">
            Estándares Internacionales
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['ISO 9001', 'ISO 14001', 'ASTM', 'DIN', 'NIST', 'IEEE'].map((standard) => (
              <div
                key={standard}
                className="px-4 py-2 bg-white rounded-lg shadow-corporate-sm font-medium text-corporate-700"
              >
                {standard}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;