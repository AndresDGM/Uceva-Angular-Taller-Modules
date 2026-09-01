import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Personaje, PersonajeRol } from '../../interfaces/metal-gear.interface';

/**
 * Componente de tabla de personajes de Metal Gear.
 *
 * Se utiliza para mostrar un listado de personajes en una tabla,
 * mostrando información como id, nombre, alias, rol (con un badge),
 * juego y año de aparición.
 *
 * @remarks
 * Este componente recibe los personajes desde un componente padre
 * a través del Input `personajes` y utiliza el mapeo `rolMap`
 * para asignar colores a los badges según el rol.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-metal-gear [personajes]="personajesList"></app-table-metal-gear>
 * ```
 */
@Component({
  selector: 'app-table-metal-gear',
  templateUrl: './table-metal-gear.component.html',
  standalone: false,
})
export class TableMetalGearComponent {
  /**
   * Listado de personajes que se mostrarán en la tabla.
   *
   * @remarks
   * Este Input permite pasar un array de personajes desde un componente padre,
   * generalmente `ListMetalGearComponent`. Cada personaje debe cumplir la interfaz `Personaje`.
   *
   * @type {Personaje[]}
   */
  @Input() personajes: Personaje[] = [];

  /**
   * Mapeo de roles de personajes a tipos de Badge.
   *
   * @remarks
   * Se utiliza para asignar colores de badges a cada rol:
   * - 'Protagonista' → 'success' (verde)
   * - 'Antagonista' → 'danger' (rojo)
   * - 'Aliado' → 'primary' (azul)
   * - 'Mentor' → 'warning' (amarillo)
   *
   * @type {Record<PersonajeRol, BadgeType>}
   */
  rolMap: Record<PersonajeRol, BadgeType> = {
    'Protagonista': 'success',
    'Antagonista': 'danger',
    'Aliado': 'primary',
    'Mentor': 'warning',
  };
}
