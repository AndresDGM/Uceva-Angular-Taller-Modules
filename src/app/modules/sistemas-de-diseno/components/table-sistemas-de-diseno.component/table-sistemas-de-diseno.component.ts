import { Component, Input } from '@angular/core';
import { sistemasdediseno } from '../../interfaces/sistemas-de-diseno.interface';

/**
 * Componente de tabla de Sistemas de Diseño.
 *
 * Se utiliza para mostrar un listado de temas relacionados
 * con los Sistemas de Diseño.
 *
 * Este componente recibe los datos desde un componente padre
 * mediante el Input `sistemasDeDiseno`.
 *
 * Forma parte de la capa de presentación y representa un
 * organismo dentro del sistema de diseño atómico.
 */
@Component({
  selector: 'app-table-sistemas-de-diseno',
  templateUrl: './table-sistemas-de-diseno.component.html',
  styleUrl: './table-sistemas-de-diseno.component.scss',
  standalone: false,
})
export class TableSistemasDeDisenoComponent {

  /**
   * Lista de sistemas de diseño que serán mostrados en la tabla.
   */
  @Input() sistemasDeDiseno: sistemasdediseno[] = [];

}
