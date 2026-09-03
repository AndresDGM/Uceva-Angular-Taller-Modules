import { Component, inject, OnInit } from '@angular/core';
import { PrincipioDeArquitectura } from '../../interfaces/principios-de-arquitectura.interface';
import { PrincipiosDeArquitecturaService } from '../../services/principios-de-arquitectura.service';

/**
 * Componente contenedor de los principios de la arquitectura de software.
 *
 * Se utiliza para gestionar y mostrar un listado de principios
 * utilizando el componente `TablePrincipiosDeArquitecturaComponents`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `PrincipiosDeArquitecturaService`
 * para obtener los principios y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-principios-de-arquitectura.component></app-list-principios-de-arquitectura.component>
 * ```
 */
@Component({
  selector: 'app-list-principios-de-arquitectura.component',
  standalone: false,
  templateUrl: './list-principios-de-arquitectura.component.html',
  styleUrl: './list-principios-de-arquitectura.component.scss',
})
export class ListPrincipiosDeArquitecturaComponent implements OnInit {
  /**
   * Listado de principios obtenidos desde el servicio.
   *
   * @type {PrincipioDeArquitectura[]}
   */
  principios: PrincipioDeArquitectura[] = [];

  /**
   * Servicio para obtener los principios.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private readonly principiosService = inject(PrincipiosDeArquitecturaService);

  /**
   * Inicializa el componente y carga los principios.
   *
   * @remarks
   * Se suscribe al método `getAllPrincipios()` del servicio y
   * asigna los datos recibidos a la propiedad `principios`.
   */
  ngOnInit(): void {
    this.principiosService.getAllPrincipios().subscribe({
      next: (principios) => this.principios = principios,
      error: (error) => console.error(error),
    });
  }
}
