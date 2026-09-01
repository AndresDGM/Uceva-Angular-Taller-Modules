import { Component, inject, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/metal-gear.interface';
import { MetalGearService } from '../../services/metal-gear.service';

/**
 * Componente contenedor de personajes de Metal Gear.
 *
 * Se utiliza para gestionar y mostrar un listado de personajes
 * utilizando el componente `TableMetalGearComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `MetalGearService`
 * para obtener los personajes y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-metal-gear></app-list-metal-gear>
 * ```
 */
@Component({
  selector: 'app-list-metal-gear',
  template: `<app-table-metal-gear [personajes]="personajes"></app-table-metal-gear>`,
  standalone: false,
})
export class ListMetalGearComponent implements OnInit {
  /**
   * Listado de personajes obtenidos desde el servicio.
   *
   * @type {Personaje[]}
   */
  personajes: Personaje[] = [];

  /**
   * Servicio para obtener personajes.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private readonly metalGearService = inject(MetalGearService);

  /**
   * Inicializa el componente y carga los personajes.
   *
   * @remarks
   * Se suscribe al método `getAllPersonajes()` del servicio y
   * asigna los datos recibidos a la propiedad `personajes`.
   */
  ngOnInit(): void {
    this.metalGearService.getAllPersonajes().subscribe({
      next: (personajes) => this.personajes = personajes,
      error: (error) => console.error(error),
    });
  }
}
