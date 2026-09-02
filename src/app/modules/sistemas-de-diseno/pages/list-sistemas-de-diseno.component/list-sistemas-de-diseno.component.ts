import { Component, inject } from '@angular/core';
import { sistemasdediseno } from '../../interfaces/sistemas-de-diseno.interface';
import { SistemasDeDisenoService } from '../../services/sistemas-de-diseno.service';

/**
 * Componente contenedor de Sistemas de Diseño.
 *
 * Se utiliza para gestionar y mostrar un listado de temas
 * relacionados con los Sistemas de Diseño utilizando el
 * componente `TableSistemasDeDisenoComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio
 * `SistemasDeDisenoService` para obtener los datos y
 * pasarlos al componente de tabla.
 *
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-sistemas-de-diseno></app-list-sistemas-de-diseno>
 * ```
 */
@Component({
  selector: 'app-list-sistemas-de-diseno',
  template: `
    <app-table-sistemas-de-diseno
      [sistemasDeDiseno]="sistemasDeDiseno">
    </app-table-sistemas-de-diseno>
  `,
  standalone: false,
})
export class ListSistemasDeDisenoComponent {

  /**
   * Listado de temas de Sistemas de Diseño obtenidos desde
   * el servicio.
   *
   * @type {sistemasdediseno[]}
   */
  sistemasDeDiseno: sistemasdediseno[] = [];

  /**
   * Servicio encargado de obtener los datos de Sistemas de Diseño.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private sistemasDeDisenoService = inject(SistemasDeDisenoService);

  /**
   * Inicializa el componente y carga los datos.
   *
   * @remarks
   * Se suscribe al método `getAllSistemasDeDiseno()` del servicio
   * y asigna los datos recibidos a la propiedad `sistemasDeDiseno`.
   */
  ngOnInit(): void {
    this.sistemasDeDisenoService.getAll().subscribe({
      next: (sistemasDeDiseno) => this.sistemasDeDiseno = sistemasDeDiseno,
      error: (error) => console.error(error),
    });
  }
}