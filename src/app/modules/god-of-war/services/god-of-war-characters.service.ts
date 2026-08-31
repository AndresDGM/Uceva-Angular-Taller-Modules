import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOD_OF_WAR_CHARACTERS } from '../../../core/config/god-of-war.config';
import { GodOfWarInterface } from '../interfaces/god-of-war.interface';

/**
 * Servicio encargado de gestionar los personajes
 * del módulo de God of War.
 */
@Injectable({
  providedIn: 'root',
})
export class GodOfWarCharactersService {

  /**
   * Obtiene todos los personajes de God of War.
   *
   * @returns Observable con el listado de personajes.
   */
  getAllCharacters(): Observable<GodOfWarInterface[]> {
    return of(GOD_OF_WAR_CHARACTERS);
  }
}
