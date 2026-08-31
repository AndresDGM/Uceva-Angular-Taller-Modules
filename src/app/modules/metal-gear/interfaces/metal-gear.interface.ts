/**
 * Interfaz que representa un personaje de la saga Metal Gear.
 *
 * Contiene la información básica necesaria para mostrar un personaje
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada personaje debe tener un `id` único, un `nombre` descriptivo,
 * un `alias`, un `rol` válido, el `juego` al que pertenece y el `anio`
 * de su primera aparición.
 *
 * @example
 * ```ts
 * const personaje: Personaje = {
 *   id: 1,
 *   nombre: 'Solid Snake',
 *   alias: 'Snake',
 *   rol: 'Protagonista',
 *   juego: 'Metal Gear Solid',
 *   anio: 1998
 * };
 * ```
 */
export interface Personaje {
  /** Identificador único del personaje */
  id: number;

  /** Nombre real del personaje */
  nombre: string;

  /** Alias o nombre en clave del personaje */
  alias: string;

  /** Rol del personaje dentro de la saga */
  rol: PersonajeRol;

  /** Juego de la saga donde aparece el personaje */
  juego: string;

  
  
}

/**
 * Tipo de rol de un personaje de la saga.
 *
 * @remarks
 * Este tipo restringe los roles a los valores predefinidos:
 * - 'Protagonista'
 * - 'Antagonista'
 * - 'Aliado'
 * - 'Mentor'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const rol: PersonajeRol = 'Protagonista';
 * ```
 */
export type PersonajeRol = 'Protagonista' | 'Antagonista' | 'Aliado' | 'Mentor';
