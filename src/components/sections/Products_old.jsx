import React from 'react';
import { motion } from 'framer-motion';
import { HiBeaker, HiStar } from 'react-icons/hi';
import { products } from '../../data/content';

const Products = () => {
  const iconMap = {
    atom: HiBeaker,
    cube: HiStar
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
            const IconComponent = iconMap[product.icon];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="card card-hover p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} text-white flex items-center justify-center mr-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-corporate-900">{product.name}</h3>
                    <p className="text-corporate-600">{product.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.characteristics.slice(0, 4).map((char, charIndex) => (
                    <div
                      key={charIndex}
                      className={`p-3 rounded-lg ${char.highlight ? 'bg-nano-blue-50 border border-nano-blue-200' : 'bg-corporate-50'}`}
                    >
                      <div className="text-sm text-corporate-500 mb-1">{char.label}</div>
                      <div className={`font-semibold ${char.highlight ? 'text-nano-blue-700' : 'text-corporate-900'}`}>
                        {char.value}
                      </div>
                    </div>
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
    </section>
  );
};

export default Products;