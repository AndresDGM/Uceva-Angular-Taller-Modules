import { ArquitecturaDeSoftware } from '../../modules/arquitectura-de-software/interfaces/arquitectura-de-software.interface';

export const ARQUITECTURA_DE_SOFTWARE: ArquitecturaDeSoftware[] = [
  {
    id: 1,
    titulo: 'Arquitectura de Software',
    descripcion:
      'Conjunto de decisiones estructurales que definen cómo un sistema está organizado y cómo sus componentes colaboran para cumplir objetivos funcionales y no funcionales.',
    subtemas: [
      'Estructura del sistema',
      'Componentes y relaciones',
      'Decisiones arquitectónicas',
      'Objetivos funcionales y no funcionales',
    ],
    imagenUrl: 'assets/images/arquitectura-software.svg',
  },
  {
    id: 2,
    titulo: 'Importancia de la Arquitectura',
    descripcion:
      'La arquitectura impacta directamente el desempeño, la velocidad de desarrollo, la calidad del producto y la viabilidad del negocio.',
    subtemas: [
      'Desempeño del sistema',
      'Velocidad de desarrollo',
      'Calidad del producto',
      'Viabilidad del negocio',
    ],
    imagenUrl: 'assets/images/importancia-arquitectura.svg',
  },
  {
    id: 3,
    titulo: 'Objetivos de la Arquitectura',
    descripcion:
      'La arquitectura busca alinear el sistema con las necesidades, permitir su evolución, asegurar atributos de calidad y servir como guía para el equipo.',
    subtemas: [
      'Alinear el sistema con las necesidades',
      'Permitir la evolución del software',
      'Asegurar atributos de calidad',
      'Servir como guía para el equipo',
    ],
    imagenUrl: 'assets/images/objetivos-arquitectura.svg',
  },
  {
    id: 4,
    titulo: 'Atributos de Calidad',
    descripcion:
      'Características que describen cómo funciona un sistema y que influyen directamente en las decisiones arquitectónicas y en la experiencia del usuario.',
    subtemas: [
      'Rendimiento',
      'Escalabilidad',
      'Disponibilidad',
      'Seguridad',
      'Mantenibilidad',
      'Usabilidad',
      'Interoperabilidad',
    ],
    imagenUrl: 'assets/images/atributos-calidad.svg',
  },
  {
    id: 5,
    titulo: 'Rendimiento',
    descripcion:
      'Capacidad del sistema para responder rápidamente y utilizar adecuadamente los recursos disponibles.',
    subtemas: [
      'Tiempo de respuesta',
      'Uso de CPU',
      'Uso de memoria',
      'Peticiones por segundo',
    ],
    imagenUrl: 'assets/images/rendimiento.svg',
  },
  {
    id: 6,
    titulo: 'Escalabilidad',
    descripcion:
      'Capacidad del sistema para manejar un aumento de usuarios o carga sin afectar su funcionamiento.',
    subtemas: [
      'Escalabilidad vertical',
      'Escalabilidad horizontal',
      'Balanceo de carga',
      'Crecimiento del sistema',
    ],
    imagenUrl: 'assets/images/escalabilidad.svg',
  },
  {
    id: 7,
    titulo: 'Disponibilidad',
    descripcion:
      'Capacidad del sistema para permanecer operativo y accesible durante el tiempo esperado.',
    subtemas: [
      'Alta disponibilidad',
      'Tolerancia a fallos',
      'Continuidad del servicio',
      'Porcentajes de disponibilidad',
    ],
    imagenUrl: 'assets/images/disponibilidad.svg',
  },
  {
    id: 8,
    titulo: 'Seguridad',
    descripcion:
      'Capacidad del sistema para proteger la información y prevenir accesos o ataques no autorizados.',
    subtemas: [
      'Autenticación',
      'Autorización',
      'Cifrado',
      'Protección contra ataques',
    ],
    imagenUrl: 'assets/images/seguridad.svg',
  },
  {
    id: 9,
    titulo: 'Mantenibilidad',
    descripcion:
      'Facilidad con la que un sistema puede modificarse, corregirse y ampliarse sin afectar innecesariamente otras partes.',
    subtemas: [
      'Modificación del sistema',
      'Corrección de errores',
      'Nuevas funcionalidades',
      'Modularidad',
      'Cohesión y acoplamiento',
    ],
    imagenUrl: 'assets/images/mantenibilidad.svg',
  },
  {
    id: 10,
    titulo: 'Usabilidad',
    descripcion:
      'Facilidad con la que un usuario puede aprender y utilizar correctamente el sistema.',
    subtemas: [
      'Facilidad de uso',
      'Experiencia del usuario',
      'Aprendizaje',
      'Accesibilidad de las funciones',
    ],
    imagenUrl: 'assets/images/usabilidad.svg',
  },
  {
    id: 11,
    titulo: 'Interoperabilidad',
    descripcion:
      'Capacidad de un sistema para integrarse y comunicarse con otros sistemas mediante mecanismos de integración.',
    subtemas: [
      'APIs',
      'Microservicios',
      'Integración con pagos',
      'Sistemas externos',
    ],
    imagenUrl: 'assets/images/interoperabilidad.svg',
  },
  {
    id: 12,
    titulo: 'Arquitectura y Negocio',
    descripcion:
      'La arquitectura es un medio para habilitar los objetivos del negocio, permitiendo que el producto avance rápidamente, con seguridad y calidad.',
    subtemas: [
      'Crecimiento',
      'Velocidad de entrega',
      'Optimización de costos',
      'Experiencia del usuario',
      'Escalabilidad del negocio',
    ],
    imagenUrl: 'assets/images/arquitectura-negocio.svg',
  },
  {
    id: 13,
    titulo: 'Business Drivers',
    descripcion:
      'Factores que impulsan las decisiones de arquitectura y representan las necesidades que el negocio debe satisfacer para alcanzar sus objetivos.',
    subtemas: [
      'Crecimiento',
      'Velocidad de entrega',
      'Costos',
      'Experiencia del usuario',
      'Escalabilidad',
    ],
    imagenUrl: 'assets/images/business-drivers.svg',
  },
  {
    id: 14,
    titulo: 'Modelos de Negocio del Software',
    descripcion:
      'El modelo de negocio determina qué tipo de arquitectura conviene, qué restricciones existen y qué expectativas de calidad deben cumplirse.',
    subtemas: [
      'Software tradicional',
      'SaaS',
      'PaaS',
      'Freemium',
      'Open Source con soporte',
      'Marketplace',
      'Pay-per-use',
    ],
    imagenUrl: 'assets/images/modelos-negocio.svg',
  },
  {
    id: 15,
    titulo: 'Arquitectura Mal Alineada',
    descripcion:
      'Una arquitectura que no responde adecuadamente a las necesidades del negocio puede generar costos elevados, dificultad para escalar y pérdida de clientes.',
    subtemas: [
      'Lentitud para lanzar funcionalidades',
      'Costos elevados de mantenimiento',
      'Pérdida de clientes',
      'Dificultad para escalar',
      'Dependencia tecnológica',
      'Complejidad innecesaria',
    ],
    imagenUrl: 'assets/images/arquitectura-mal-alineada.svg',
  },
  {
    id: 16,
    titulo: 'Proceso de Decisión Arquitectónica',
    descripcion:
      'Proceso utilizado para analizar problemas, evaluar alternativas y tomar decisiones arquitectónicas justificadas y documentadas.',
    subtemas: [
      'Identificar el problema',
      'Generar alternativas técnicas',
      'Evaluar consecuencias',
      'Documentar decisiones',
      'Validar con prototipos',
      'Ajustar con retroalimentación',
    ],
    imagenUrl: 'assets/images/decision-arquitectonica.svg',
  },
  {
    id: 17,
    titulo: 'Arquitecto de Software',
    descripcion:
      'Profesional responsable de diseñar la arquitectura del sistema, conectar las necesidades del negocio con la tecnología y orientar al equipo de desarrollo.',
    subtemas: [
      'Definir la arquitectura',
      'Garantizar atributos de calidad',
      'Identificar riesgos técnicos',
      'Documentar decisiones',
      'Seleccionar tecnologías y patrones',
      'Guiar al equipo de desarrollo',
    ],
    imagenUrl: 'assets/images/arquitecto-software.svg',
  },
];