import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">NanoAlsa</h3>
            <p className="text-gray-300 mb-4">
              Nanometales de Alta Pureza para aplicaciones industriales y tecnológicas avanzadas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <HiLocationMarker className="w-5 h-5 mr-2 text-blue-400" />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiMail className="w-5 h-5 mr-2 text-blue-400" />
                <span>jacox@nanoalsa.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <HiPhone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+56 9 XXXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Productos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Nano Cobre (Cu)</li>
              <li>Nano Plata (Ag)</li>
              <li>Aplicaciones Industriales</li>
              <li>Investigación y Desarrollo</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Industrias</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Defensa y Seguridad</li>
              <li>Aeroespacial</li>
              <li>Energía</li>
              <li>Electrónica</li>
              <li>Catálisis</li>
              <li>Medicina</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 NanoAlsa. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Nanometales de Alta Pureza - Santiago, Chile
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;