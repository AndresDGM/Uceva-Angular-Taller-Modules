import { Component, Input } from '@angular/core';
import { ArquitecturaDeSoftware } from '../../interfaces/arquitectura-de-software.interface';

/**
 * Componente presentacional (dumb component) para mostrar los conceptos de Arquitectura de Software en formato de tarjetas.
 *
 * @remarks
 * Este componente recibe la lista de conceptos a través del `@Input() arquitecturaDeSoftware`
 * y se encarga exclusivamente de renderizar las tarjetas con sus respectivas imágenes, títulos,
 * descripciones y listas de subtemas clave con estilos responsivos.
 *
 * @example
 * ```html
 * <app-table-arquitectura-de-software
 *   [arquitecturaDeSoftware]="conceptosList">
 * </app-table-arquitectura-de-software>
 * ```
 */
@Component({
  selector: 'app-table-arquitectura-de-software',
  standalone: false,
  templateUrl: './table-arquitectura-de-software.component.html',
  styleUrl: './table-arquitectura-de-software.component.scss',
})
export class TableArquitecturaDeSoftwareComponent {
  /**
   * Colección de conceptos de Arquitectura de Software a renderizar en la vista.
   *
   * @defaultValue `[]`
   */
  @Input()
  arquitecturaDeSoftware: ArquitecturaDeSoftware[] = [];
}

