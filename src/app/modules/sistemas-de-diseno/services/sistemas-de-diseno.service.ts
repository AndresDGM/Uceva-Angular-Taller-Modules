import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SISTEMAS_DE_DISENO } from '../../../core/config/sistemas-de-diseno.config';
import { sistemasdediseno } from '../interfaces/sistemas-de-diseno.interface';


/**
 * Obtiene el listado completo de temas de Sistemas de Diseño.
 *
 * @remarks
 * Retorna un `Observable` que emite un arreglo de objetos que implementan la interfaz `sistemasdediseno`.
 * Los datos son leídos de forma síncrona desde la constante `SISTEMAS_DE_DISENO` e impulsados mediante `of()`.
 *
 * @returns {Observable<sistemasdediseno[]>} Observable que emite el arreglo con los temas de Sistemas de Diseño.
 */
  
@Injectable({
  providedIn: 'root',
})
export class SistemasDeDisenoService {
  
  getAll(): Observable<sistemasdediseno[]> {
    return of(SISTEMAS_DE_DISENO);
  }
}
