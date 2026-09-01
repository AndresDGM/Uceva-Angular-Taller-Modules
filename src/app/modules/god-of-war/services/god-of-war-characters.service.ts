import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOD_OF_WAR_CHARACTERS } from '../../../core/config/god-of-war.config';
import { GodOfWarInterface } from '../interfaces/god-of-war.interface';

/**
 * Servicio encargado de gestionar y suministrar la información de los personajes
 * del módulo de God of War.
 *
 * @remarks
 * Este servicio actúa como la capa de acceso a datos del módulo, obteniendo los personajes
 * desde la configuración local ubicada en `src/app/core/config/god-of-war.config.ts`
 * y exponiéndolos mediante un `Observable` de RxJS a los componentes consumidores.
 */
@Injectable({
  providedIn: 'root',
})
export class GodOfWarCharactersService {

  /**
   * Obtiene el listado completo de personajes de God of War.
   *
   * @remarks
   * Retorna un `Observable` que emite un arreglo de objetos que implementan la interfaz `GodOfWarInterface`.
   * Los datos son leídos de forma síncrona desde la constante `GOD_OF_WAR_CHARACTERS` e impulsados mediante `of()`.
   *
   * @returns {Observable<GodOfWarInterface[]>} Observable que emite el arreglo con los personajes de God of War.
   */
  getAllCharacters(): Observable<GodOfWarInterface[]> {
    return of(GOD_OF_WAR_CHARACTERS);
  }
}

