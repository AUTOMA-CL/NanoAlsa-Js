import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      id: 1,
      name: 'Nano Cobre (Cu)',
      description: 'Nanopartículas de cobre de alta pureza con excelentes propiedades conductivas y antimicrobianas.',
      image: '/images/nanocobre.png',
      features: [
        'Alta conductividad térmica y eléctrica',
        'Propiedades antimicrobianas',
        'Resistencia a la corrosión',
        'Aplicaciones en electrónica'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      name: 'Nano Plata (Ag)',
      description: 'Nanopartículas de plata con propiedades antimicrobianas superiores y alta conductividad.',
      image: '/images/nanoplata.png',
      features: [
        'Máxima conductividad eléctrica',
        'Potente acción antimicrobiana',
        'Estabilidad química',
        'Aplicaciones médicas'
      ],
      color: 'from-gray-400 to-gray-500'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nanometales de alta pureza desarrollados con tecnología de vanguardia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-32 h-32 bg-white/20 rounded-full items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {product.name.includes('Cobre') ? 'Cu' : 'Ag'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Características:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;