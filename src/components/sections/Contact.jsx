import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiMail, HiLocationMarker, HiBriefcase, HiPhone } from 'react-icons/hi';
import { companyInfo, technicalSpecs } from '../../data/content';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg mb-6">
            Contacto <span className="text-nano-blue-600">Profesional</span>
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto">
            Conecte con nuestro equipo de expertos en nanometales especializados
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-corporate-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nano-blue-100 text-nano-blue-600 rounded-lg flex items-center justify-center">
                    <HiUser className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-corporate-900">{companyInfo.director}</div>
                    <div className="text-corporate-600">Director General NanoAlsa</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nano-blue-100 text-nano-blue-600 rounded-lg flex items-center justify-center">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-corporate-900">Correo Electrónico</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-nano-blue-600 hover:underline">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nano-blue-100 text-nano-blue-600 rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-corporate-900">Ubicación</div>
                    <div className="text-corporate-600">{companyInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-nano-blue-100 text-nano-blue-600 rounded-lg flex items-center justify-center">
                    <HiBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-corporate-900">Especialización</div>
                    <div className="text-corporate-600">{companyInfo.specialization}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-corporate-50 rounded-lg">
                <p className="text-sm text-corporate-600">
                  <HiPhone className="w-4 h-4 inline mr-2" />
                  Horario de atención: Lunes a Viernes 9:00 - 18:00 hrs (Chile)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-corporate-900 mb-6">
              Cuestionario Técnico
            </h3>
            <p className="text-corporate-600 mb-6">
              Para cotización específica, proporcione los siguientes datos:
            </p>

            <div className="space-y-4">
              {technicalSpecs.questionnaire.slice(0, 7).map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 bg-nano-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-corporate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <button className="btn btn-primary w-full">
                Enviar Consulta Técnica
              </button>
              <button className="btn btn-secondary w-full">
                Descargar Ficha Técnica
              </button>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-nano-blue-600 to-nano-blue-700 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para revolucionar su industria?
          </h3>
          <p className="text-xl text-nano-blue-100 mb-8 max-w-2xl mx-auto">
            Descubra cómo nuestros nanometales de alta pureza pueden transformar sus productos
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${companyInfo.email}`}
              className="btn bg-white text-nano-blue-600 hover:bg-nano-blue-50"
            >
              Contactar Ahora
            </a>
            <button className="btn btn-ghost text-white border-white hover:bg-white/10">
              Ver Productos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;