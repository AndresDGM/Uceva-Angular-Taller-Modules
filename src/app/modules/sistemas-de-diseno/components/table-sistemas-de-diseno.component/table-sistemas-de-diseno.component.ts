import { Component, Input } from '@angular/core';
import { sistemasdediseno } from '../../interfaces/sistemas-de-diseno.interface';

/**
 * Componente de presentación para desplegar la información de Sistemas de Diseño.
 *
 * @remarks
 * Se encarga de renderizar la cuadrícula de tarjetas con los temas, descripciones y conceptos clave
 * sobre Sistemas de Diseño (como principios, metodologías y Diseño Atómico).
 * Recibe los datos desde su componente padre (`ListSistemasDeDisenoComponent`) mediante la propiedad `@Input() sistemasDeDiseno`.
 *
 * Representa un organismo dentro de la arquitectura de Diseño Atómico.
 *
 * @example
 * ```html
 * <app-table-sistemas-de-diseno [sistemasDeDiseno]="sistemasDeDiseno">
 * </app-table-sistemas-de-diseno>
 * ```
 */
@Component({
  selector: 'app-table-sistemas-de-diseno',
  templateUrl: './table-sistemas-de-diseno.component.html',
  styleUrl: './table-sistemas-de-diseno.component.scss',
  standalone: false,
})
export class TableSistemasDeDisenoComponent {

  /**
   * Lista de elementos de Sistemas de Diseño que serán mostrados en la cuadrícula/tabla.
   *
   * @remarks
   * Arreglo de objetos tipados según la interfaz `sistemasdediseno[]`.
   * Proviene de la entrada asignada por el componente contenedor padre.
   *
   * @type {sistemasdediseno[]}
   * @defaultValue []
   */
  @Input() sistemasDeDiseno: sistemasdediseno[] = [];

}
