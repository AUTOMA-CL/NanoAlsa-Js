import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Productos',
      links: [
        { name: 'Nano Cobre (Cu)', href: '#products' },
        { name: 'Nano Plata (Ag)', href: '#products' }
      ]
    },
    {
      title: 'Industrias',
      links: [
        { name: 'Defensa y Armamentismo', href: '#industries' },
        { name: 'Tecnología Aeroespacial', href: '#industries' },
        { name: 'Electrónica Avanzada', href: '#industries' },
        { name: 'Medicina y Farmacia', href: '#industries' },
        { name: 'Energía Sustentable', href: '#industries' },
        { name: 'Catálisis Industrial', href: '#industries' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Acerca de NanoAlsa', href: '#about' },
        { name: 'Nuestra Tecnología', href: '#about' }
      ]
    }
  ];

  return (
    <footer className="bg-corporate-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-corporate-300 leading-relaxed">
                  {companyInfo.tagline} - Líderes mundiales en desarrollo y producción de nanometales
                  de ultra alta pureza para industrias críticas y aplicaciones de vanguardia.
                </p>

                <div className="text-sm text-corporate-400">
                  <p>Fundada en {companyInfo.foundedYear}</p>
                  <p>Tecnología basada en experiencia CIMM</p>
                  <p>Certificaciones internacionales ISO</p>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-corporate-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-corporate-800 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-corporate-400 text-sm">
              © {currentYear} {companyInfo.name}. Todos los derechos reservados. |
              Director: {companyInfo.director}
            </div>

            <div className="flex items-center space-x-6 text-sm text-corporate-400">
              <a href="#contact" className="hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-corporate-500">
            Nanometales de alta pureza para aplicaciones industriales críticas •
            Santiago, Chile • {companyInfo.email}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;