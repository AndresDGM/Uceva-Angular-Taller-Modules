import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SISTEMAS_DE_DISENO } from '../../../core/config/sistemas-de-diseno.config';
import { sistemasdediseno } from '../interfaces/sistemas-de-diseno.interface';


/**
 * Servicio encargado de gestionar y suministrar la información de Sistemas de Diseño.
 *
 * @remarks
 * Este servicio actúa como proveedor de datos para el módulo de Sistemas de Diseño.
 * Accede a la configuración local definida en `SISTEMAS_DE_DISENO`
 * (`src/app/core/config/sistemas-de-diseno.config.ts`) y la retorna como un flujo reactivo (`Observable`).
 *
 * @example
 * ```ts
 * const service = inject(SistemasDeDisenoService);
 * service.getAll().subscribe(data => console.log(data));
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SistemasDeDisenoService {

  /**
   * Obtiene el listado completo de temas de Sistemas de Diseño.
   *
   * @remarks
   * Retorna un `Observable` que emite un arreglo de objetos que implementan la interfaz `sistemasdediseno`.
   * Los datos son leídos desde la constante local `SISTEMAS_DE_DISENO` e impulsados mediante `of()`.
   *
   * @returns {Observable<sistemasdediseno[]>} Observable que emite el arreglo con los temas de Sistemas de Diseño.
   */
  getAll(): Observable<sistemasdediseno[]> {
    return of(SISTEMAS_DE_DISENO);
  }
}
