import { sistemasdediseno } from '../../modules/sistemas-de-diseno/interfaces/sistemas-de-diseno.interface';

export const SISTEMAS_DE_DISENO: sistemasdediseno[] = [
  {
    id: 1,
    titulo: '¿Qué es un Sistema de Diseño?',
    descripcion:
      'Es un conjunto de principios, reglas, componentes y patrones reutilizables que permite mantener la consistencia visual y funcional de una interfaz.',
    subtemas: [
      'Principios, reglas y componentes reutilizables',
      'Consistencia visual y funcional',
      'Puente entre diseño y desarrollo',
      'Escalabilidad de productos digitales'
    ],
  },

  {
    id: 2,
    titulo: '¿Por qué usar Sistemas de Diseño?',
    descripcion:
      'Los Sistemas de Diseño ayudan a organizar el desarrollo frontend, reducir inconsistencias y facilitar el trabajo entre diferentes equipos.',
    subtemas: [
      'Reduce inconsistencias en las interfaces',
      'Mejora la mantenibilidad del frontend',
      'Facilita la colaboración entre equipos',
      'Permite escalar productos y marcas',
      'Acelera el desarrollo'
    ],

  },

  {
    id: 3,
    titulo: 'Problemas sin un Sistema de Diseño',
    descripcion:
      'Cuando no existe un Sistema de Diseño, las interfaces pueden presentar problemas de consistencia, mantenimiento y escalabilidad.',
    subtemas: [
      'Interfaces inconsistentes',
      'Componentes duplicados',
      'Deuda técnica visual',
      'Dificultad para escalar',
      'Re trabajo constante'
    ],
  },

  {
    id: 4,
    titulo: 'Componentes Clave',
    descripcion:
      'Un Sistema de Diseño está compuesto por diferentes elementos que establecen las reglas visuales y funcionales de una interfaz.',
    subtemas: [
      'Principios de diseño',
      'Paleta de colores',
      'Tipografía',
      'Espaciados',
      'Componentes UI',
      'Patrones de interacción',
      'Documentación'
    ],
  },

  {
    id: 5,
    titulo: 'Sistema de Diseño Atómico',
    descripcion:
      'Es una metodología propuesta por Brad Frost que divide las interfaces en niveles jerárquicos para promover la reutilización, consistencia y modularidad.',
    subtemas: [
      'Átomos',
      'Moléculas',
      'Organismos',
      'Plantillas',
      'Páginas'
    ],
  },

  {
    id: 6,
    titulo: 'Átomos',
    descripcion:
      'Son los elementos más básicos de una interfaz. Definen la apariencia y el estilo base del sistema de diseño y son altamente reutilizables.',
    subtemas: [
      'Input',
      'Button',
      'Badge',
      'Labels'
    ],
  },

  {
    id: 7,
    titulo: 'Moléculas',
    descripcion:
      'Son combinaciones de átomos que cumplen una función simple y específica, por lo que ya tienen un significado funcional claro.',
    subtemas: [
      'Input Group',
      'Button Group',
      'Breadcrumbs',
      'List Group'
    ],
  },

  {
    id: 8,
    titulo: 'Organismos',
    descripcion:
      'Son estructuras más complejas formadas por moléculas y átomos que representan secciones completas de una interfaz.',
    subtemas: [
      'Navbar',
      'Cards complejas',
      'Modal',
      'Accordion',
      'Tabs / Navs',
      'Tables',
      'Carousel'
    ],
  }
];