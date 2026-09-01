import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERSONAJES_METAL_GEAR } from '../../../core/config/personajes-metal-gear.config';
import { Personaje } from '../interfaces/metal-gear.interface';

/**
 * Servicio para gestionar personajes de Metal Gear.
 *
 * Se encarga de proporcionar métodos para obtener los personajes de la aplicación.
 * Actualmente devuelve un listado de personajes de ejemplo definidos en
 * `PERSONAJES_METAL_GEAR`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los personajes.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private metalGearService: MetalGearService) {}
 *
 * ngOnInit() {
 *   this.metalGearService.getAllPersonajes().subscribe(personajes => {
 *     console.log(personajes);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MetalGearService {
  /**
   * Obtiene todos los personajes disponibles.
   *
   * @returns Observable con el listado de personajes (`Personaje[]`).
   */
  getAllPersonajes(): Observable<Personaje[]> {
    return of(PERSONAJES_METAL_GEAR);
  }
}
