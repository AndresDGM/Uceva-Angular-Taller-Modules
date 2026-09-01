import { Component, inject } from '@angular/core';
import { Anime } from '../../interfaces/anime.interface';
import { AnimeService } from '../../services/anime.service';


/**
 * Componente de página para listar animes.
 *
 * Actúa como componente contenedor (smart component) encargado de interactuar
 * con `AnimeService` para solicitar la lista de animes destacados y transferir
 * los datos al componente de presentación `TableAnimesComponent`.
 *
 * @remarks
 * Orquesta la carga de datos en el ciclo de vida `ngOnInit` y gestiona tanto la
 * asignación de la respuesta como el manejo de errores.
 *
 * @example
 * ```html
 * <app-list-animes></app-list-animes>
 * ```
 */
@Component({
  selector: 'app-list-animes',
  template: `
    <app-table-animes [anime]="anime"></app-table-animes>
  `,
  standalone: false,
})
export class ListAnimesComponent {
  /**
   * Colección de animes obtenidos desde la API.
   *
   * @type {Anime[]}
   * @remarks
   * Se inicializa como un arreglo vacío y se actualiza con la propiedad `data`
   * de la respuesta de `AnimeService.getTopAnime()`. Se envía como `@Input()` a `TableAnimesComponent`.
   */
  anime: Anime[] = [];

  /**
   * Servicio inyectado para gestionar la comunicación con la API de Anime (Jikan).
   *
   * @type {AnimeService}
   * @private
   */
  private animeService = inject(AnimeService);

  /**
   * Hook de inicialización del componente.
   *
   * Ejecuta la consulta a `AnimeService.getTopAnime()` al montar el componente,
   * suscribiéndose al flujo observable para asignar los animes recibidos a la propiedad `anime`
   * o registrar cualquier error ocurrido en la consola.
   *
   * @returns void
   */
  ngOnInit(): void {
    this.animeService.getTopAnime().subscribe({
      next: (response) => this.anime = response.data,
      error: (error) => console.error(error),
    });
  }
}
