export const companyInfo = {
  name: 'NanoAlsa',
  tagline: 'Nanometales de Alta Pureza',
  heroTitle: 'Líderes en Nanotecnología Industrial',
  heroSubtitle: 'Nanometales de Alta Pureza para el Futuro de la Industria',
  heroDescription: 'Desarrollamos y producimos nanometales de ultra alta pureza (Cu, Ag) para industrias críticas globales. Con tecnología patentada y certificación científica internacional, transformamos materiales a escala nanométrica para aplicaciones de vanguardia.',
  director: 'José Antonio Cox',
  email: 'jacox@nanoalsa.com',
  location: 'Santiago, Chile',
  specialization: 'Nanometales para industrias críticas',
  foundedYear: '2018',
  employeeCount: '25+',
  industriesServed: '6'
};

export const heroStats = [
  {
    value: '99.98%',
    label: 'Pureza Superior',
    description: 'Nanometales con pureza excepcional certificada por STEWART'
  },
  {
    value: '<90 nm',
    label: 'Precisión Nanométrica',
    description: 'Tamaño de partícula ultra controlado'
  },
  {
    value: '6+',
    label: 'Industrias Críticas',
    description: 'Sectores de alta tecnología atendidos'
  },
];

export const products = [
  {
    id: 'copper',
    name: 'Nano Cobre (Cu)',
    subtitle: 'Ultra Pureza Industrial',
    icon: 'atom',
    color: 'copper',
    gradient: 'from-orange-500 to-red-600',
    image: '/images/nanocobre-latest.png',
    characteristics: [
      { label: 'Tamaño', value: '5 - 90 nm', highlight: true },
      { label: 'Pureza', value: '99.987%', highlight: true },
      { label: 'Distribución Principal', value: '79% en 30-60 nm', highlight: true },
      { label: 'Morfología', value: '<25 nm', highlight: true },
      { label: 'Punto de Fusión', value: '<39°C', highlight: true },
      { label: 'Morfología', value: 'Esférica uniforme', highlight: false },
      { label: 'Estabilidad', value: 'Alta dispersión', highlight: false },
      { label: 'Conductividad', value: 'Excelente térmica/eléctrica', highlight: true }
    ],
    applications: [
      'Tintas conductivas para electrónica impresa',
      'Catalizadores de alta eficiencia industrial',
      'Agentes antimicrobianos avanzados',
      'Componentes para baterías de nueva generación',
      'Revestimientos conductores térmicos especializados',
      'Sistemas de refrigeración nanofluidos',
      'Aplicaciones médicas antimicrobianas'
    ],
    industries: ['defense', 'aerospace', 'electronics', 'energy', 'medicine'],
    certifications: ['PUC', 'USACH', 'ISO-9001']
  },
  {
    id: 'silver',
    name: 'Nano Plata (Ag)',
    subtitle: 'Excelencia Antimicrobiana',
    icon: 'cube',
    color: 'silver',
    gradient: 'from-slate-400 to-slate-600',
    image: '/images/nanoplata.png',
    characteristics: [
      { label: 'Tamaño Promedio', value: 'Esférica', highlight: true },
      { label: 'Pureza', value: '99.987%', highlight: true },
      { label: 'Distribución Principal', value: '62% entre 5-10 nm', highlight: true },
      { label: 'Morfología', value: 'Esférica', highlight: true },
      { label: 'Morfología', value: 'Esférica', highlight: true },
      { label: 'Dispersión', value: 'Baja (homogénea)', highlight: true },
      { label: 'Análisis Estadístico', value: '101 partículas medidas', highlight: false },
      { label: 'Confianza', value: '95% estadística', highlight: true }
    ],
    applications: [
      'Revestimientos antimicrobianos para dispositivos médicos',
      'Tintas conductivas de ultra alta precisión',
      'Textiles inteligentes antibacterianos avanzados',
      'Sistemas de purificación de agua industrial',
      'Componentes ópticos y fotónicos especializados',
      'Catalizadores para síntesis orgánica',
      'Agentes bactericidas de amplio espectro farmacéutico',
      'Biosensores de alta sensibilidad'
    ],
    industries: ['medicine', 'electronics', 'catalysis', 'energy'],
    certifications: [
      'HR-SEM INSPECT-F50, FEI con detector STEM',
      'Universidad de Chile - Facultad de Ciencias Químicas y Farmacéuticas',
      'UICMA - Unidad de Investigación y Caracterización de Materiales Avanzados',
      'Dra. Ana Luisa Riveros Salvatierra - Certificación',
      'Análisis estadístico riguroso de 101 partículas (95% confianza)',
      'Distribución Gaussiana con r² = 0,9188',
      'Suspensión en alcohol isopropílico al 96%'
    ]
  }
];

export const competitiveAdvantage = {
  title: 'Superioridad Tecnológica Comprobada',
  subtitle: 'Comparativa con Estándares de Mercado Internacional',
  comparison: [
    {
      feature: 'Tamaño de Partícula',
      standard: '50-200 nm',
      nanoalsa: '<20 nm',
      improvement: '75% menor',
      impact: 'Mayor área superficial y reactividad'
    },
    {
      feature: 'Pureza del Metal',
      standard: '<99.90%',
      nanoalsa: '99.98%',
      improvement: '0.1% superior',
      impact: 'Eliminación total de impurezas críticas'
    },
    {
      feature: 'Valencia Cu Metálico',
      standard: '80-100% Cu2+',
      nanoalsa: '99.9-100% Cu0',
      improvement: 'Estado metálico puro',
      impact: 'Conductividad y reactividad óptimas'
    },
    {
      feature: 'Temperatura Fusión',
      standard: '~300°C',
      nanoalsa: '<39°C',
      improvement: '87% menor',
      impact: 'Procesamiento a baja temperatura'
    },
    {
      feature: 'Reactividad Superficial',
      standard: 'Moderada',
      nanoalsa: 'Ultra Alta',
      improvement: '10x superior',
      impact: 'Eficiencia catalítica excepcional'
    },
    {
      feature: 'Uniformidad Morfológica',
      standard: 'Variable',
      nanoalsa: '>95% uniforme',
      improvement: 'Control total',
      impact: 'Propiedades consistentes'
    }
  ]
};

export const industries = [
  {
    id: 'defense',
    name: 'Industria de Defensa',
    subtitle: 'Tecnología para Seguridad Nacional',
    icon: 'shield',
    color: 'red',
    gradient: 'from-red-600 to-red-800',
    description: 'Nanometales especializados para aplicaciones de defensa que requieren la más alta confiabilidad y rendimiento.',
    applications: [
      'Sistemas de armas avanzadas y municiones de precisión',
      'Explosivos controlados de alta eficiencia',
      'Revestimientos de camuflaje electromagnético',
      'Blindajes ligeros de resistencia superior',
      'Componentes furtivos para equipos militares',
      'Sistemas de protección CBRN avanzados'
    ],
    benefits: [
      'Reducción de peso en equipos',
      'Mayor eficiencia balística',
      'Resistencia extrema',
      'Sigilo electromagnético'
    ],
    certifications: ['NATO', 'Mil-Spec', 'ITAR']
  },
  {
    id: 'aerospace',
    name: 'Tecnología Aeroespacial',
    subtitle: 'Innovación Más Allá de la Atmósfera',
    icon: 'rocket',
    color: 'blue',
    gradient: 'from-blue-600 to-blue-800',
    description: 'Soluciones nanométricas para los desafíos más extremos de la exploración espacial y aviación comercial.',
    applications: [
      'Propulsión espacial de nueva generación',
      'Componentes de turbinas aeroespaciales',
      'Estructuras ultraligeras para satélites',
      'Revestimientos térmicos para reentrada',
      'Sistemas de navegación cuántica',
      'Materiales para hábitats espaciales'
    ],
    benefits: [
      'Reducción de masa del 30%',
      'Resistencia a radiación',
      'Eficiencia térmica superior',
      'Durabilidad espacial'
    ],
    certifications: ['NASA', 'ESA', 'AS9100']
  },
  {
    id: 'energy',
    name: 'Energía Avanzada',
    subtitle: 'El Futuro de la Energía Limpia',
    icon: 'battery',
    color: 'green',
    gradient: 'from-green-600 to-green-800',
    description: 'Nanomateriales revolucionarios para sistemas energéticos sustentables y de alta eficiencia.',
    applications: [
      'Celdas solares de eficiencia cuántica',
      'Baterías de ultra alta densidad energética',
      'Supercondensadores para almacenamiento rápido',
      'Celdas de combustible de hidrógeno avanzadas',
      'Sistemas de conversión termoeléctrica',
      'Redes de distribución inteligentes'
    ],
    benefits: [
      'Eficiencia energética +40%',
      'Vida útil extendida',
      'Carga ultrarrápida',
      'Impacto ambiental mínimo'
    ],
    certifications: ['IEC', 'UL', 'ASTM']
  },
  {
    id: 'electronics',
    name: 'Electrónica Avanzada',
    subtitle: 'Semiconductores del Futuro',
    icon: 'microchip',
    color: 'purple',
    gradient: 'from-purple-600 to-purple-800',
    description: 'Nanometales de precisión para la próxima generación de dispositivos electrónicos.',
    applications: [
      'Circuitos integrados de alta frecuencia',
      'Transistores cuánticos ultrarrápidos',
      'Tintas conductivas para electrónica flexible',
      'Blindajes electromagnéticos avanzados',
      'Interconexiones de ultra baja resistencia',
      'Sensores de alta sensibilidad'
    ],
    benefits: [
      'Velocidad de procesamiento +50%',
      'Miniaturización extrema',
      'Eficiencia energética',
      'Flexibilidad mecánica'
    ],
    certifications: ['IEEE', 'JEDEC', 'IPC']
  },
  {
    id: 'catalysis',
    name: 'Catálisis Industrial',
    subtitle: 'Acelerando Reacciones Críticas',
    icon: 'flask',
    color: 'indigo',
    gradient: 'from-indigo-600 to-indigo-800',
    description: 'Catalizadores nanométricos para procesos industriales de máxima eficiencia y sostenibilidad.',
    applications: [
      'Conversión catalítica de CO2 en combustibles',
      'Transformación eficiente de metanol',
      'Reacciones Kumada-Miyaura optimizadas',
      'Síntesis orgánica de alta selectividad',
      'Procesos de refinamiento petroquímico',
      'Catálisis verde y sustentable'
    ],
    benefits: [
      'Selectividad +90%',
      'Reducción de subproductos',
      'Eficiencia energética',
      'Sostenibilidad ambiental'
    ],
    certifications: ['ASTM', 'ISO-14001', 'Green Chemistry']
  },
  {
    id: 'medicine',
    name: 'Medicina y Farmacia',
    subtitle: 'Nanotecnología para la Salud',
    icon: 'hospital',
    color: 'teal',
    gradient: 'from-teal-600 to-teal-800',
    description: 'Nanomateriales biocompatibles para revolucionar el diagnóstico y tratamiento médico.',
    applications: [
      'Agentes antimicrobianos de espectro extendido',
      'Sistemas de liberación dirigida de fármacos',
      'Contraste para diagnóstico por imagen',
      'Terapia fotodinámica contra el cáncer',
      'Biosensores implantables',
      'Prótesis con propiedades antimicrobianas'
    ],
    benefits: [
      'Eficacia antimicrobiana 99.9%',
      'Biocompatibilidad certificada',
      'Liberación controlada',
      'Toxicidad mínima'
    ],
    certifications: ['FDA', 'EMA', 'ISO-13485']
  }
];

export const certifications = [
  {
    id: 'puc',
    institution: 'Pontificia Universidad Católica (PUC)',
    department: 'Laboratorio Alex Stewart',
    logo: '/images/puc-logo.png',
    certification: 'Certificado de Pureza',
    method: 'Análisis de Microscopía de Fuerza Atómica (AFM)',
    date: '2023',
    scope: 'Caracterización topográfica nanométrica',
    accreditation: 'ISO/IEC 17025'
  },
  {
    id: 'usach',
    institution: 'Universidad de Santiago (USACH)',
    department: 'Departamento de Ingeniería Metalúrgica',
    logo: '/images/usach-logo.png',
    certification: 'Validación en Laboratorio de Microscopía mediante microscopía electrónica de barrido con equipo Vega 3, Tecsan.',
    method: 'Microscopía Electrónica de Barrido (SEM)',
    date: '2023',
    scope: 'Análisis morfológico y compositivo',
    accreditation: 'ASTM International'
  },
  {
    id: 'uch',
    institution: 'Universidad de Chile (UCH)',
    department: 'Facultad de Ciencias Químicas y Farmacéuticas - UICMA',
    logo: '/images/uch-logo.png',
    certification: 'Caracterización completa de nanopartículas de plata mediante HR-SEM INSPECT-F50 FEI con detector STEM.',
    method: 'Microscopía Electrónica de Alta Resolución con Detector STEM',
    responsible: 'Dra. Ana Luisa Riveros Salvatierra',
    date: 'Noviembre 2020',
    scope: 'Análisis estadístico de 101 partículas con tamaño promedio de 8,1 ± 0,2 nm',
    details: 'Distribución homogénea con baja dispersión (±4nm), confianza estadística del 95%',
    accreditation: 'ISO/IEC 17025'
  }
];

export const technicalSpecs = {
  title: 'Especificaciones Técnicas Avanzadas',
  questionnaire: [
    'Tamaño de partículas requerido (rango nanométrico específico)',
    'Tolerancia dimensional y distribución estadística',
    'Morfología preferida (esférica, laminar, dendrítica)',
    'Pureza del elemento expresada en porcentaje mínimo',
    'Volumen de producción mensual estimado (kg/mes)',
    'Condiciones de preservación y almacenamiento',
    'Aplicación industrial específica y condiciones de uso',
    'Certificaciones requeridas (ISO, ASTM, FDA, etc.)',
    'Compatibilidad con procesos existentes',
    'Requisitos de trazabilidad y documentación'
  ],
  customization: {
    title: 'Desarrollo Personalizado',
    description: 'Nuestro equipo de I+D puede desarrollar formulaciones específicas según sus requerimientos técnicos únicos.',
    capabilities: [
      'Síntesis a medida según especificaciones',
      'Escalado desde laboratorio hasta producción industrial',
      'Caracterización completa multi-técnica',
      'Optimización de propiedades específicas',
      'Certificación según estándares internacionales'
    ]
  }
};

export const researchCapabilities = {
  title: 'Capacidades de I+D',
  facilities: [
    {
      name: 'Laboratorio de Síntesis Nanométrica',
      description: 'Equipos de síntesis controlada en atmósfera inerte',
      equipment: ['Reactores de flujo continuo', 'Sistemas de microondas', 'Hornos de alta temperatura']
    },
    {
      name: 'Centro de Caracterización Avanzada',
      description: 'Análisis multi-técnica de nanomateriales',
      equipment: ['HR-SEM/TEM', 'XRD', 'XPS', 'AFM', 'DLS', 'BET']
    },
    {
      name: 'Laboratorio de Aplicaciones',
      description: 'Pruebas de rendimiento en condiciones reales',
      equipment: ['Ensayos catalíticos', 'Pruebas antimicrobianas', 'Caracterización eléctrica']
    }
  ],
  partnerships: [
    'Universidades de investigación internacionales',
    'Centros tecnológicos especializados',
    'Empresas líderes en sectores estratégicos',
    'Organizaciones de normalización'
  ]
};

export const sustainability = {
  title: 'Compromiso con la Sostenibilidad',
  initiatives: [
    {
      title: 'Innovación Verde',
      description: 'Proceso físico mecánico sin intervención de químicos',
      metrics: ['90% reducción en residuos', '60% menor consumo energético']
    },
    {
      title: 'Economía Circular',
      description: 'Reciclado y reutilización de materiales',
      metrics: ['95% recuperación de metales preciosos', '80% reutilización de solventes']
    },
    {
      title: 'Certificaciones Ambientales',
      description: 'Cumplimiento de los más altos estándares',
      metrics: ['ISO 14001', 'Green Chemistry Award', 'Carbon Neutral Process']
    }
  ]
};

export const globalReach = {
  title: 'Presencia Global',
  regions: [
    {
      name: 'América Latina',
      countries: ['Chile', 'México', 'Brasil', 'Colombia'],
      headquarters: 'Santiago, Chile'
    },
    {
      name: 'América del Norte',
      countries: ['Estados Unidos', 'Canadá'],
      partnerships: 'Distribuidores certificados'
    },
    {
      name: 'Europa',
      countries: ['Alemania', 'Francia', 'Reino Unido'],
      partnerships: 'Alianzas estratégicas'
    },
    {
      name: 'Asia-Pacífico',
      countries: ['Japón', 'Corea del Sur', 'Australia'],
      partnerships: 'Representación comercial'
    }
  ]
};