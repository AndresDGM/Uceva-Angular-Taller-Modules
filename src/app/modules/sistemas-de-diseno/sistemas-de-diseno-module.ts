import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDeDisenoRoutingModule } from './sistemas-de-diseno-routing-module';
import { TableSistemasDeDisenoComponent } from './components/table-sistemas-de-diseno.component/table-sistemas-de-diseno.component';
import { SistemasDeDisenoComponent } from './sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno.component/list-sistemas-de-diseno.component';


/**
 * Módulo principal de la sección Sistemas de Diseño.
 *
 * @remarks
 * Encapsula todos los componentes, páginas y rutas relacionadas con los Sistemas de Diseño.
 *
 * Declara:
 * - `TableSistemasDeDisenoComponent`: componente de presentación para renderizar las tarjetas.
 * - `SistemasDeDisenoComponent`: componente contenedor secundario con `<router-outlet>`.
 * - `ListSistemasDeDisenoComponent`: página contenedora que obtiene los datos del servicio.
 *
 * Importa:
 * - `CommonModule`: para directivas como `*ngFor` y pipes básicos.
 * - `SistemasDeDisenoRoutingModule`: para la gestión de rutas internas.
 */
@NgModule({
  declarations: [
    TableSistemasDeDisenoComponent,
    SistemasDeDisenoComponent,
    ListSistemasDeDisenoComponent
  ],
  imports: [
    CommonModule,
    SistemasDeDisenoRoutingModule
  ]
})
export class SistemasDeDisenoModule { }
