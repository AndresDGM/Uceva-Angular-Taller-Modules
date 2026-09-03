import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRINCIPIOS_DE_ARQUITECTURA } from '../../../core/config/principios-de-arquitectura.config';
import { PrincipioDeArquitectura } from '../interfaces/principios-de-arquitectura.interface';

/**
 * Servicio para gestionar los principios de la arquitectura de software.
 *
 * Se encarga de proporcionar métodos para obtener los principios de la aplicación.
 * Actualmente devuelve un listado de principios definidos en
 * `PRINCIPIOS_DE_ARQUITECTURA`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los principios.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private principiosService: PrincipiosDeArquitecturaService) {}
 *
 * ngOnInit() {
 *   this.principiosService.getAllPrincipios().subscribe(principios => {
 *     console.log(principios);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PrincipiosDeArquitecturaService {
  /**
   * Obtiene todos los principios de arquitectura disponibles.
   *
   * @returns Observable con el listado de principios (`PrincipioDeArquitectura[]`).
   */
  getAllPrincipios(): Observable<PrincipioDeArquitectura[]> {
    return of(PRINCIPIOS_DE_ARQUITECTURA);
  }
}
