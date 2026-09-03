import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARQUITECTURA_DE_SOFTWARE } from '../../../core/config/arquitectura-de-software.config';
import { ArquitecturaDeSoftware } from '../interfaces/arquitectura-de-software.interface';
@Injectable({
  providedIn: 'root',
})
export class ArquitecturaDeSoftwareService {
  getAll() : Observable<ArquitecturaDeSoftware[]>{
    return of(ARQUITECTURA_DE_SOFTWARE);
  }
}
