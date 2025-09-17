import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbAward } from 'react-icons/tb';
import { products } from '../../data/content';
import CertificateModal from '../ui/CertificateModal';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleOpenCertificates = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getCertificates = (productId) => {
    if (productId === 'copper') {
      return [
        {
          name: 'Certificado de Pureza',
          institution: 'Laboratorio Alex Stewart',
          url: '/certificates/Analisis de Pureza Nano Cobre.pdf'
        },
        {
          name: 'Certificado de Nanometría',
          institution: 'Universidad Católica de Chile',
          url: '/certificates/Universidad Católica Nano Cobre.pdf'
        },
        {
          name: 'Certificado de Nanometría',
          institution: 'Universidad de Chile',
          url: '/certificates/Universidad de Chile Nano Cobre.pdf'
        }
      ];
    } else if (productId === 'silver') {
      return [
        {
          name: 'Certificado de Nanometría',
          institution: 'Universidad de Chile',
          url: '/certificates/Universidad de Chile Nano Plata.pdf'
        }
      ];
    }
    return [];
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg mb-6">
            Nanometales de <span className="text-nano-blue-600">Ultra Pureza</span>
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto">
            Productos especializados con las más altas especificaciones técnicas del mercado mundial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => {

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gradient-to-br hover:from-nano-blue-50 hover:to-corporate-50 rounded-xl border border-corporate-200/50 p-8 cursor-pointer transition-all duration-300"
                style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center mr-4 overflow-hidden`}
                    >
                      <img
                        src={product.image}
                        alt={`${product.name} nanopartículas`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-corporate-900">{product.name}</h3>
                      <p className="text-corporate-600">{product.subtitle}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    onClick={() => handleOpenCertificates(product)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-nano-blue-600 to-nano-blue-700
                             text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                             text-sm font-medium group"
                  >
                    <TbAward className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="hidden sm:inline">Ver Certificados</span>
                    <span className="sm:hidden">Certificados</span>
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.characteristics.slice(0, 4).map((char, charIndex) => (
                    <motion.div
                      key={charIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1 + charIndex * 0.05,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.15 }
                      }}
                      className={`p-3 rounded-lg transition-all duration-150 bg-white hover:bg-nano-blue-50/50 border border-gray-100 hover:border-nano-blue-200/60`}
                    >
                      <div className="text-sm text-corporate-500 mb-1">{char.label}</div>
                      <div className={`font-semibold ${char.highlight ? 'text-nano-blue-700' : 'text-corporate-900'}`}>
                        {char.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-corporate-900">Aplicaciones Principales:</h4>
                  <ul className="space-y-1">
                    {product.applications.slice(0, 3).map((app, appIndex) => (
                      <li key={appIndex} className="text-corporate-600 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-nano-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={selectedProduct?.name || ''}
        certificates={selectedProduct ? getCertificates(selectedProduct.id) : []}
      />
    </section>
  );
};

export default Products;