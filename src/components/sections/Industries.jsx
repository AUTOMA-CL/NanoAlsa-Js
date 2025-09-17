import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiLightningBolt, HiStar, HiBeaker, HiOfficeBuilding, HiHeart } from 'react-icons/hi';
import { industries } from '../../data/content';

const Industries = () => {
  const iconMap = {
    shield: HiShieldCheck,
    rocket: HiLightningBolt,
    battery: HiStar,
    microchip: HiStar,
    flask: HiBeaker,
    hospital: HiHeart
  };

  return (
    <section id="industries" className="section bg-corporate-50/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg mb-6">
            Industrias <span className="text-nano-blue-600">Críticas</span>
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto">
            Soluciones especializadas para los sectores más exigentes del mundo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "#ffffff"
                }}
                className="bg-white rounded-xl border border-corporate-200/50 p-6 cursor-pointer transition-none"
                style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.gradient} text-white flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>

                <h3 className="text-xl font-bold text-corporate-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-corporate-600 text-sm mb-4">
                  {industry.subtitle}
                </p>

                <div className="space-y-2">
                  {industry.applications.slice(0, 3).map((app, appIndex) => (
                    <div key={appIndex} className="text-sm text-corporate-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-nano-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>

                {industry.casestudy && (
                  <div className="mt-4 pt-4 border-t border-corporate-200">
                    <div className="text-xs text-nano-blue-600 font-medium">
                      {industry.casestudy.title}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;