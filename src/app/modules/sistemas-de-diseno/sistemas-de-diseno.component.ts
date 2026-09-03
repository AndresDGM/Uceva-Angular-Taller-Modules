import { Component } from '@angular/core';

/**
 * Componente raíz del módulo Sistemas de Diseño.
 *
 * @remarks
 * Este componente actúa como contenedor de enrutamiento secundario (*nested layout*) para el módulo.
 * Renderiza una plantilla simple con el elemento `<router-outlet></router-outlet>` donde se despliegan
 * las vistas hijas configuradas en `SistemasDeDisenoRoutingModule` (como `ListSistemasDeDisenoComponent`).
 *
 * @example
 * ```html
 * <app-sistemas-de-diseno.component></app-sistemas-de-diseno.component>
 * ```
 */
@Component({
  selector: 'app-sistemas-de-diseno.component',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class SistemasDeDisenoComponent {

}
