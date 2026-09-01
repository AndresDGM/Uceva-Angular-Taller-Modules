import { Component, Input } from '@angular/core';

import { GodOfWarInterface } from '../../interfaces/god-of-war.interface';

/**
 * Componente presentacional encargado de renderizar en formato tabular la información de los personajes de God of War.
 *
 * @remarks
 * Este componente recibe los datos mediante la propiedad de entrada `@Input() characters` desde un componente contenedor
 * (como `ListGodOfWarCharacters`) y los presenta visualmente en la plantilla HTML.
 *
 * Forma parte de la capa presentacional del módulo God of War.
 */
@Component({
  selector: 'app-table-god-of-war-characters',
  standalone: false,
  styleUrl: './table-god-of-war-characters.component.scss',
  templateUrl: './table-god-of-war-characters.component.html',
})
export class TableGodOfWarCharactersComponent {

  /**
   * Listado de personajes de God of War a mostrar en la tabla.
   *
   * @remarks
   * Propiedad de entrada decorada con `@Input()`. Recibe un arreglo de objetos que implementan `GodOfWarInterface`.
   *
   * @type {GodOfWarInterface[]}
   */
  @Input() characters: GodOfWarInterface[] = [];

}