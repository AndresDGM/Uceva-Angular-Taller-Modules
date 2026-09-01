import { Component, inject } from '@angular/core';
import { GodOfWarInterface } from '../../interfaces/god-of-war.interface';
import { GodOfWarCharactersService } from '../../services/god-of-war-characters.service';

/**
 * Componente contenedor (página principal) para la gestión y visualización de personajes de God of War.
 *
 * @remarks
 * Este componente coordina el flujo de datos del módulo God of War:
 * 1. Consume el servicio `GodOfWarCharactersService` inyectado mediante `inject()`.
 * 2. Carga los personajes durante el hook de ciclo de vida `ngOnInit`.
 * 3. Transmite el listado de personajes al componente presentacional `TableGodOfWarCharactersComponent`.
 *
 * Flujo de información:
 * `GodOfWarCharactersService` -> `ListGodOfWarCharacters` -> `TableGodOfWarCharactersComponent`
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
   * Arreglo que almacena los personajes de God of War obtenidos desde el servicio.
   *
   * @remarks
   * Se utiliza para proporcionar los personajes al componente presentacional encargado de renderizar la tabla.
   *
   * @type {GodOfWarInterface[]}
   */
  characters: GodOfWarInterface[] = [];

  /**
   * Instancia del servicio `GodOfWarCharactersService` inyectada utilizando la función `inject()` de Angular.
   *
   * @remarks
   * Permite consultar la información de los personajes de God of War desde la capa de servicio.
   *
   * @private
   */
  private godOfWarCharactersService = inject(GodOfWarCharactersService);

  /**
   * Inicializa el componente y solicita la carga de los personajes de God of War.
   *
   * @remarks
   * Se suscribe al Observable retornado por `getAllCharacters()` del servicio `GodOfWarCharactersService`.
   * Asigna los datos recibidos a la propiedad `characters` o registra en consola si ocurre un error.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.godOfWarCharactersService.getAllCharacters().subscribe({
      next: (characters) => this.characters = characters,
      error: (error) => console.error(error),
    });
  }
}