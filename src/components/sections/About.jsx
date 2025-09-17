import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightningBolt, HiGlobe, HiShieldCheck } from 'react-icons/hi';
import { companyInfo } from '../../data/content';

const About = () => {
  const features = [
    {
      icon: HiLightningBolt,
      title: 'Tecnología Patentada',
      description: 'Procesos de síntesis únicos que garantizan pureza y uniformidad excepcionales.'
    },
    {
      icon: HiShieldCheck,
      title: 'Certificación Científica',
      description: 'Validado por las principales universidades e instituciones de investigación.'
    },
    {
      icon: HiGlobe,
      title: 'Alcance Global',
      description: 'Suministramos nanometales a industrias críticas en todo el mundo.'
    }
  ];

  return (
    <section id="about" className="section bg-corporate-50/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-display-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Excelencia en{' '}
                <span className="text-nano-blue-600">Nanotecnología</span>
              </motion.h2>

              <motion.p
                className="text-lg text-corporate-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Con más de {new Date().getFullYear() - parseInt(companyInfo.foundedYear)} años de experiencia,
                NanoAlsa se ha establecido como el líder indiscutible en el desarrollo y producción de
                nanometales de alta pureza. Nuestros procesos patentados y certificaciones internacionales
                nos permiten ofrecer soluciones únicas para las industrias más exigentes del mundo.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  'Pureza superior al 99.987% garantizada',
                  'Procesos ecológicos y sustentables',
                  'Escalabilidad desde laboratorio hasta producción industrial',
                  'Soporte técnico especializado 24/7'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <HiCheckCircle className="w-5 h-5 text-nano-blue-600 flex-shrink-0" />
                    <span className="text-corporate-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-icon">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-corporate-xl">
              <img
                src="/images/copper.png"
                alt="Nanopartículas de alta pureza"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-corporate"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-nano-blue-600">99.987%</div>
                <div className="text-sm text-corporate-600">Pureza Máxima</div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-corporate"
                initial={{ scale: 0, rotate: 10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-nano-copper-600">&lt;90 nm</div>
                <div className="text-sm text-corporate-600">Precisión</div>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nano-blue-100 rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nano-copper-100 rounded-full blur-xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;