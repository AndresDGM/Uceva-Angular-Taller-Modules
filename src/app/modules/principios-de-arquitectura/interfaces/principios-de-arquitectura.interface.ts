/**
 * Interfaz que representa un principio de la arquitectura de software.
 *
 * Contiene la información básica necesaria para mostrar un principio
 * en la tabla o en cualquier componente de listado del módulo.
 *
 * @remarks
 * Cada principio debe tener un `id` único, un `titulo` descriptivo,
 * una `descripcion` del concepto, una lista de `subtemas` y una `imagenUrl`
 * con la ruta de la imagen ilustrativa.
 *
 * @example
 * ```ts
 * const principio: PrincipioDeArquitectura = {
 *   id: 1,
 *   titulo: 'Modularidad',
 *   descripcion: 'Dividir el sistema en módulos independientes.',
 *   subtemas: ['Reduce la complejidad'],
 *   imagenUrl: 'assets/modularidad.jpg',
 * };
 * ```
 */
export interface PrincipioDeArquitectura {
  /** Identificador único del principio */
  id: number;

  /** Título o nombre del principio */
  titulo: string;

  /** Descripción del concepto del principio */
  descripcion: string;

  /** Listado de subtemas o beneficios asociados al principio */
  subtemas: string[];

  /** Ruta de la imagen ilustrativa del principio */
  imagenUrl: string;

  
  
}

