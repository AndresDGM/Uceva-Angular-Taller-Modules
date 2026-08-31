import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de Metal Gear.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con Metal Gear, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-metal-gear></app-metal-gear>
 * ```
 */
@Component({
  selector: 'app-metal-gear',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class MetalGearComponent { }
