import { Component, inject } from '@angular/core';
import { GodOfWarInterface } from '../../interfaces/god-of-war.interface';
import { GodOfWarCharactersService } from '../../services/god-of-war-characters.service';

/**
 * Componente contenedor de personajes de God of War.
 *
 * Se utiliza para gestionar y mostrar un listado de personajes
 * utilizando el componente `TableGodOfWarCharactersComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio
 * `GodOfWarCharactersService` para obtener los personajes
 * y pasarlos al componente de tabla.
 *
 * Forma parte de la capa de presentación del módulo.
 */
@Component({
  selector: 'app-list-god-of-war-characters',
  template: `
    <app-table-god-of-war-characters
      [characters]="characters">
    </app-table-god-of-war-characters>
  `,
  standalone: false,
})
export class ListGodOfWarCharacters {

  /**
   * Listado de personajes obtenidos desde el servicio.
   *
   * @type {GodOfWarInterface[]}
   */
  characters: GodOfWarInterface[] = [];

  /**
   * Servicio para obtener los personajes de God of War.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private godOfWarCharactersService = inject(GodOfWarCharactersService);

  /**
   * Inicializa el componente y carga los personajes.
   *
   * @remarks
   * Se suscribe al método `getAllCharacters()` del servicio
   * y asigna los datos recibidos a la propiedad `characters`.
   */
  ngOnInit(): void {
    this.godOfWarCharactersService.getAllCharacters().subscribe({
      next: (characters) => this.characters = characters,
      error: (error) => console.error(error),
    });
  }
}