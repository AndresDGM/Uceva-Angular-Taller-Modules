import { Component, inject } from '@angular/core';
import { ArquitecturaDeSoftware } from '../../interfaces/arquitectura-de-software.interface';
import { ArquitecturaDeSoftwareService } from '../../services/arquitectura-de-software.service';

/**
 * Componente de página para listar los conceptos de Arquitectura de Software.
 *
 * Actúa como componente contenedor (smart component) encargado de interactuar
 * con `ArquitecturaDeSoftwareService` para solicitar la lista de conceptos y
 * transferir los datos al componente de presentación
 * `TableArquitecturaDeSoftwareComponent`.
 *
 * @remarks
 * Orquesta la carga de datos en el ciclo de vida `ngOnInit` y gestiona tanto la
 * asignación de la respuesta como el manejo de errores.
 *
 * @example
 * ```html
 * <app-list-arquitectura-de-software></app-list-arquitectura-de-software>
 * ```
 */
@Component({
  selector: 'app-list-arquitectura-de-software',
  template: `
  <app-table-arquitectura-de-software
    [arquitecturaDeSoftware]="arquitecturaDeSoftware"
  ></app-table-arquitectura-de-software>
`,
  standalone: false,
})
export class ListArquitecturaDeSoftwareComponent {
  arquitecturaDeSoftware: ArquitecturaDeSoftware[] = [];

  private arquitecturaDeSoftwareService = inject(
    ArquitecturaDeSoftwareService
  );

  ngOnInit(): void {
    this.arquitecturaDeSoftwareService
      .getAll()
      .subscribe({
        next: (response) => {
          this.arquitecturaDeSoftware = response;
        },
        error: (error) => {
          console.error(error);
        },
      });
      console.log('Conceptos:', this.arquitecturaDeSoftware);
  }
}