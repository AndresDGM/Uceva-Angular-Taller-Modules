import { PrincipioDeArquitectura } from '../../modules/principios-de-arquitectura/interfaces/principios-de-arquitectura.interface';

/**
 * Configuración de los principios de la arquitectura de software.
 *
 * Esta constante define el listado de principios que se mostrarán en el módulo
 * de "Principios de Arquitectura de Software", extraídos de la presentación
 * de la clase (slide "2. Principios de la Arquitectura de Software").
 *
 * Cada elemento cumple con la interfaz `PrincipioDeArquitectura`.
 *
 * @type {PrincipioDeArquitectura[]}
 */
export const PRINCIPIOS_DE_ARQUITECTURA: PrincipioDeArquitectura[] = [
  {
    id: 1,
    titulo: 'Modularidad',
    descripcion:
      'Consiste en dividir el sistema en partes más pequeñas llamadas módulos. Cada módulo debe tener una función clara y específica dentro del sistema. La idea es que los módulos puedan desarrollarse, evaluarse y modificarse de forma independiente.',
    subtemas: [
      'Facilita el trabajo en equipo',
      'Reduce la complejidad',
      'Permite reemplazar o mejorar módulos sin afectar todo el sistema'
    ],
    imagenUrl: 'assets/principios/modularidad.webp'
  },
  {
    id: 2,
    titulo: 'Cohesión (Alta)',
    descripcion:
      'La cohesión indica qué tan relacionadas están las tareas dentro de un módulo. Con alta cohesión, cada módulo cumple una sola responsabilidad clara y bien enfocada.',
    subtemas: [
      'Facilita la comprensión del código',
      'Hace más simple el mantenimiento',
      'Cada módulo tiene un propósito único y claro'
    ],
    imagenUrl: 'assets/principios/cohesion-acoplamiento.webp'
  },
  {
    id: 3,
    titulo: 'Acoplamiento (Baja)',
    descripcion:
      'El acoplamiento mide la dependencia entre módulos. Con bajo acoplamiento, los módulos funcionan de forma independiente y los cambios en uno no afectan a los demás.',
    subtemas: [
      'Permite modificar o reemplazar módulos sin afectar a otros',
      'Aumenta la flexibilidad del sistema',
      'Facilidad de evolución del sistema'
    ],
    imagenUrl: 'assets/principios/acoplamiento.png'
  },
  {
    id: 4,
    titulo: 'Separación de Responsabilidades (Alta)',
    descripcion:
      'Consiste en dividir el sistema según distintos tipos de responsabilidades, evitando mezclar lógica de negocio, presentación, acceso a datos u otros aspectos.',
    subtemas: [
      'Reduce errores al evitar que un cambio en una parte afecte otra innecesariamente',
      'Facilita la organización en capas o componentes',
      'Mejora la legibilidad y escalabilidad del sistema'
    ],
    imagenUrl: 'assets/principios/responsabilidades.png'
  }
];
