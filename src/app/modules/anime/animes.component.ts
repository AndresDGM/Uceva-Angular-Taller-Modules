import { Component } from '@angular/core';

/**
 * Componente contenedor principal de la sección de animes.
 *
 * Funciona como layout base para las rutas del módulo de animes,
 * renderizando las vistas hijas a través de `<router-outlet>`.
 *
 * @remarks
 * Es el componente asignado a la ruta raíz del módulo `AnimeRoutingModule`.
 *
 * @example
 * ```html
 * <app-animes></app-animes>
 * ```
 */
@Component({
  selector: 'app-animes',
  standalone: false,
  template: `<router-outlet></router-outlet>`,
})
export class AnimesComponent {

}
