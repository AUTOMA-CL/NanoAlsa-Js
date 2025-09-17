import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDocumentText, HiBadgeCheck, HiAcademicCap, HiStar } from 'react-icons/hi';
import { TbCertificate, TbAward } from 'react-icons/tb';
import { RiAwardLine, RiMedalLine } from 'react-icons/ri';

const CertificateModal = ({ isOpen, onClose, productName, certificates }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getIcon = (certificateName) => {
    if (certificateName.includes('Pureza')) return RiMedalLine;
    if (certificateName.includes('Universidad')) return HiAcademicCap;
    return TbCertificate;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh]
                       overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-nano-blue-600 via-nano-blue-700 to-indigo-800 p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-all p-2
                           rounded-lg hover:bg-white/20 hover:scale-110"
                  aria-label="Cerrar modal"
                >
                  <HiX className="w-6 h-6" />
                </button>

                <div className="flex items-center">
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl
                             flex items-center justify-center mr-4 shadow-lg"
                  >
                    <TbAward className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Certificados Oficiales</h3>
                    <p className="text-blue-100 mt-1 flex items-center">
                      {productName}
                      <HiStar className="w-4 h-4 ml-2 text-yellow-400" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {certificates && certificates.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certificates.map((cert, index) => {
                      const Icon = getIcon(cert.name);
                      return (
                        <motion.a
                          key={index}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative bg-white
                                   rounded-xl p-5 border-2 border-corporate-200 hover:border-nano-blue-400
                                   hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-start">
                            <motion.div
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className="w-12 h-12 bg-gradient-to-br from-nano-blue-500 to-nano-blue-700
                                        rounded-xl flex items-center justify-center text-white mr-4
                                        shadow-md group-hover:shadow-lg"
                            >
                              <Icon className="w-6 h-6" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-corporate-900 mb-1 group-hover:text-nano-blue-700
                                           transition-colors text-base">
                                {cert.name}
                              </h4>
                              <p className="text-sm text-corporate-600 mb-3">
                                {cert.institution}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="inline-flex items-center text-xs font-medium text-nano-blue-700
                                               bg-nano-blue-100 px-2.5 py-1 rounded-full border border-nano-blue-200">
                                  <HiDocumentText className="w-3 h-3 mr-1" />
                                  Ver PDF
                                </span>
                                <RiAwardLine className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-br from-nano-blue-400/0 to-nano-blue-600/0
                                        group-hover:from-nano-blue-400/5 group-hover:to-nano-blue-600/10
                                        rounded-xl transition-all duration-300 pointer-events-none" />
                        </motion.a>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-br from-corporate-100 to-corporate-200
                               rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <HiDocumentText className="w-10 h-10 text-corporate-400" />
                    </motion.div>
                    <p className="text-corporate-600 text-lg">No hay certificados disponibles en este momento.</p>
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 p-4 bg-corporate-50 rounded-xl border-2 border-corporate-200"
                >
                  <p className="text-sm text-nano-blue-800 flex items-start font-medium">
                    <HiBadgeCheck className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-nano-blue-600" />
                    Todos nuestros certificados son emitidos por instituciones académicas y laboratorios
                    de prestigio internacional, garantizando la máxima calidad y pureza de nuestros nanometales.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;