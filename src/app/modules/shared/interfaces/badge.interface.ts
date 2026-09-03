import { Themes } from "../../../core/interfaces/themes.interface";

/**
 * Tipo de badge basado en los temas globales de la aplicación.
 *
 * @remarks
 * Este tipo reutiliza la definición de {@link Themes} para garantizar
 * consistencia visual entre los componentes del sistema de diseño
 * y los estilos globales (Bootstrap / UI).
 *
 * Se utiliza principalmente para definir el color de fondo del badge.
 *
 * @example
 * ```ts
 * const badgeType: BadgeType = 'success';
 * ```
 */
export type BadgeType = Themes;

/**
 * Clase CSS para definir el color del texto dentro del badge.
 *
 * @remarks
 * Permite alternar entre texto blanco (`text-white`) para contrastar con fondos oscuros
 * o texto oscuro (`text-dark`) para fondos claros.
 *
 * @example
 * ```ts
 * const textClass: BadgeTypeText = 'text-white';
 * ```
 */
export type BadgeTypeText = 'text-white' | 'text-dark';