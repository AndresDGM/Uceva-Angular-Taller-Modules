import { Component, Input } from '@angular/core';
import { PrincipioDeArquitectura } from '../../interfaces/principios-de-arquitectura.interface';

/**
 * Componente de tabla de principios de la arquitectura de software.
 *
 * Se utiliza para mostrar un listado de principios, mostrando información
 * como id, título, descripción, subtemas e imagen.
 *
 * @remarks
 * Este componente recibe los principios desde un componente padre
 * a través del Input `principios`.
 *
 * @example
 * ```html
 * <app-table-principios-de-arquitectura [principios]="principiosList"></app-table-principios-de-arquitectura>
 * ```
 */
@Component({
  selector: 'app-table-principios-de-arquitectura',
  standalone: false,
  templateUrl: './table-principios-de-arquitectura.components.html',
  styleUrl: './table-principios-de-arquitectura.components.scss',
})
export class TablePrincipiosDeArquitecturaComponents {
  /**
   * Listado de principios que se mostrarán en la tabla.
   *
   * @remarks
   * Este Input permite pasar un array de principios desde un componente padre,
   * generalmente `ListPrincipiosDeArquitecturaComponent`.
   * Cada principio debe cumplir la interfaz `PrincipioDeArquitectura`.
   *
   * @type {PrincipioDeArquitectura[]}
   */
  @Input() principios: PrincipioDeArquitectura[] = [];
}
