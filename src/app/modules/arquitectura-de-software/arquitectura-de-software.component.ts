import { Component } from '@angular/core';

/**
 * Componente principal contenedor (layout) del módulo de Arquitectura de Software.
 *
 * @remarks
 * Este componente actúa como contenedor raíz para las vistas hijas del módulo
 * de Arquitectura de Software, alojando un `<router-outlet>` para renderizar
 * dinámicamente las páginas correspondientes según la ruta activa.
 *
 * @example
 * ```html
 * <app-arquitectura-de-software></app-arquitectura-de-software>
 * ```
 */
@Component({
  selector: 'app-arquitectura-de-software',
  standalone: false,
  template: `<router-outlet></router-outlet>`,
})
export class ArquitecturaDeSoftwareComponent {}

