import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiShieldCheck, HiCheckCircle, HiDocumentText } from 'react-icons/hi';
import { TbCertificate, TbAward } from 'react-icons/tb';
import { RiMedalLine, RiAwardLine } from 'react-icons/ri';

const Certifications = () => {
  const certificateData = [
    {
      id: 'lab-cert',
      institution: 'Laboratorio Certificado',
      department: 'Análisis de Pureza',
      description: 'Certificación completa de propiedades nanométricas y pureza de nuestros productos',
      certificates: [
        {
          name: 'Certificado de Pureza',
          product: 'Nano Cobre (Cu)',
          url: '/certificates/Analisis de Pureza Nano Cobre.pdf',
          icon: RiMedalLine,
          highlights: ['Pureza 99.999%', 'Tamaño <20nm', 'Valencia Cu0']
        }
      ]
    },
    {
      id: 'puc',
      institution: 'Universidad Católica de Chile',
      department: 'Facultad de Ingeniería',
      description: 'Validación académica de propiedades y aplicaciones de nanomateriales',
      certificates: [
        {
          name: 'Certificado de Nanometría',
          product: 'Nano Cobre (Cu)',
          url: '/certificates/Universidad Católica Nano Cobre.pdf',
          icon: HiAcademicCap,
          highlights: ['Análisis TEM', 'Difracción de rayos X', 'Espectroscopia']
        }
      ]
    },
    {
      id: 'uchile',
      institution: 'Universidad de Chile',
      department: 'Centro de Nanotecnología',
      description: 'Caracterización avanzada y certificación de nanometales de ultra pureza',
      certificates: [
        {
          name: 'Certificado de Nanometría',
          product: 'Nano Cobre (Cu)',
          url: '/certificates/Universidad de Chile Nano Cobre.pdf',
          icon: HiAcademicCap,
          highlights: ['Análisis morfológico', 'Propiedades térmicas', 'Estabilidad']
        },
        {
          name: 'Certificado de Nanometría',
          product: 'Nano Plata (Ag)',
          url: '/certificates/Universidad de Chile Nano Plata.pdf',
          icon: HiAcademicCap,
          highlights: ['Propiedades antimicrobianas', 'Conductividad', 'Pureza 99.99%']
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-display-lg mb-6">
            <span className="text-nano-blue-600">Certificación</span> Científica
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto mb-4">
            Validación y análisis por instituciones de prestigio internacional
          </p>
        </motion.div>

        {/* Certificate Summary Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-corporate-50 rounded-2xl p-6 mb-12 border-2 border-corporate-200"
        >
          <div className="flex items-center justify-center mb-4">
            <TbAward className="w-8 h-8 text-nano-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-nano-blue-800">Certificados Disponibles</h3>
          </div>
          <p className="text-center text-nano-blue-700 mb-6">
            Contamos con <span className="font-bold">4 certificados oficiales</span> de nanometría emitidos por
            instituciones académicas líderes y laboratorios especializados
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-700">2</div>
              <div className="text-sm text-nano-blue-600">Productos Certificados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-700">3</div>
              <div className="text-sm text-nano-blue-600">Instituciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-700">99.99%</div>
              <div className="text-sm text-nano-blue-600">Pureza Máxima</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nano-blue-700">&lt;20nm</div>
              <div className="text-sm text-nano-blue-600">Tamaño Partícula</div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {certificateData.map((inst, index) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card card-hover p-8 relative overflow-hidden"
            >

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-nano-blue-500 to-nano-blue-700 rounded-xl flex items-center justify-center mr-3">
                  <HiAcademicCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-corporate-900">
                    {inst.institution}
                  </h3>
                  <p className="text-sm text-corporate-600">
                    {inst.department}
                  </p>
                </div>
              </div>

              <p className="text-corporate-700 mb-6 leading-relaxed">
                {inst.description}
              </p>

              <div className="space-y-4">
                {inst.certificates.map((cert, certIndex) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={certIndex}
                      className="border-t border-corporate-200 pt-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <IconComponent className="w-5 h-5 text-nano-blue-600 mr-2" />
                            <span className="font-semibold text-corporate-900 text-sm">
                              {cert.name}
                            </span>
                          </div>
                          <div className="text-xs text-corporate-600 mb-2">
                            {cert.product}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {cert.highlights.map((highlight, hIndex) => (
                              <span
                                key={hIndex}
                                className="text-xs px-2 py-0.5 bg-nano-blue-50 text-nano-blue-700 rounded"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center justify-center gap-2 w-full mt-3 px-4 py-2.5
                                 bg-gradient-to-r from-nano-blue-600 to-nano-blue-700 text-white
                                 rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                                 text-sm font-medium"
                      >
                        <motion.div
                          whileHover={{ rotate: 12 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="flex items-center justify-center"
                        >
                          <TbCertificate className="w-4 h-4" />
                        </motion.div>
                        <span>Ver Certificado PDF</span>
                        <RiAwardLine className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-corporate-200">
                <div className="flex items-center text-sm">
                  <HiCheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-corporate-600">Certificación vigente</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;