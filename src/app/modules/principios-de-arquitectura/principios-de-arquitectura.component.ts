import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de Principios de Arquitectura de Software.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas,
 * mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-principios-de-arquitectura.component></app-principios-de-arquitectura.component>
 * ```
 */
@Component({
  selector: 'app-principios-de-arquitectura.component',
  standalone: false,
  templateUrl: './principios-de-arquitectura.component.html',
  styleUrl: './principios-de-arquitectura.component.scss',
})
export class PrincipiosDeArquitecturaComponent { }
