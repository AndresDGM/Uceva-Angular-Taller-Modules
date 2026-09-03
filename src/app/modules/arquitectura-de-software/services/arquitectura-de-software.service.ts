import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARQUITECTURA_DE_SOFTWARE } from '../../../core/config/arquitectura-de-software.config';
import { ArquitecturaDeSoftware } from '../interfaces/arquitectura-de-software.interface';

/**
 * Servicio encargado de gestionar y proveer la información de conceptos
 * de Arquitectura de Software.
 *
 * @remarks
 * Este servicio encapsula el acceso a la fuente de datos (actualmente configurada
 * en {@link ARQUITECTURA_DE_SOFTWARE}) y la expone de manera asíncrona mediante Observables
 * siguiendo el patrón reactivo de Angular.
 *
 * @example
 * ```ts
 * const service = inject(ArquitecturaDeSoftwareService);
 * service.getAll().subscribe(conceptos => console.log(conceptos));
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ArquitecturaDeSoftwareService {
  /**
   * Obtiene la lista completa de conceptos de Arquitectura de Software.
   *
   * @returns Un {@link Observable} que emite un arreglo de objetos {@link ArquitecturaDeSoftware}.
   */
  getAll(): Observable<ArquitecturaDeSoftware[]> {
    return of(ARQUITECTURA_DE_SOFTWARE);
  }
}

