import { Component, Input } from '@angular/core';

import { Anime } from '../../interfaces/anime.interface';

/**
 * Componente de presentación para mostrar el catálogo o listado de animes.
 *
 * Se encarga de renderizar visualmente las tarjetas/cuadrícula de animes con
 * información detallada como imagen de portada, título, puntuación y número de episodios.
 *
 * @remarks
 * Este componente recibe la lista de animes desde un componente contenedor padre
 * (generalmente `ListAnimesComponent`) mediante la propiedad de entrada `@Input() anime`.
 *
 * @example
 * ```html
 * <app-table-animes [anime]="animeList"></app-table-animes>
 * ```
 */
@Component({
  selector: 'app-table-animes',
  templateUrl: './table-animes.component.html',
  styleUrl: './table-animes.component.scss',
  standalone: false,
})
export class TableAnimesComponent {

  /**
   * Listado de animes que se renderiza en la cuadrícula/tabla.
   *
   * @type {Anime[]}
   * @remarks
   * Propiedad de entrada decorada con `@Input()` que recibe un arreglo de objetos `Anime`
   * provenientes del componente contenedor (`ListAnimesComponent`).
   * Cada elemento contiene la información necesaria para renderizar una tarjeta de anime.
   */
  @Input()
  anime: Anime[] = [];

}