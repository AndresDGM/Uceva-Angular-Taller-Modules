/**
 * Representa la estructura de un concepto o tema de Arquitectura de Software.
 *
 * @remarks
 * Esta interfaz define el modelo de datos utilizado a lo largo del módulo
 * de Arquitectura de Software, incluyendo identificador, título descriptivo,
 * explicación detallada, subtemas clave y ruta a su imagen ilustrativa.
 *
 * @example
 * ```ts
 * const concepto: ArquitecturaDeSoftware = {
 *   id: 1,
 *   titulo: 'Arquitectura de Software',
 *   descripcion: 'Conjunto de decisiones estructurales...',
 *   subtemas: ['Estructura del sistema', 'Componentes'],
 *   imagenUrl: 'assets/images/arquitectura-software.png'
 * };
 * ```
 */
export interface ArquitecturaDeSoftware {
  /**
   * Identificador único del concepto.
   */
  id: number;

  /**
   * Título representativo del tema o concepto arquitectónico.
   */
  titulo: string;

  /**
   * Descripción detallada del concepto de arquitectura.
   */
  descripcion: string;

  /**
   * Lista de subtemas o puntos clave asociados al concepto.
   */
  subtemas: string[];

  /**
   * Ruta o URL de la imagen ilustrativa del concepto.
   */
  imagenUrl: string;
}