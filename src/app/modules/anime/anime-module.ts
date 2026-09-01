import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRoutingModule } from './anime-routing-module';
import { SharedModule } from '../shared/shared-module';
import { AnimesComponent } from './animes.component';
import { TableAnimesComponent } from './components/table-animes.component/table-animes.component';
import { ListAnimesComponent } from './pages/list-animes.component/list-animes.component';

/**
 * Módulo de funcionalidad para la gestión y visualización de animes.
 *
 * Encapsula los componentes, rutas y dependencias necesarias para
 * consultar la API de Jikan y mostrar el catálogo de animes destacados.
 *
 * @remarks
 * Este módulo declara los componentes:
 * - `AnimesComponent`: Contenedor principal con salida de enrutamiento.
 * - `ListAnimesComponent`: Página contenedora que orquesta la obtención de datos mediante `AnimeService`.
 * - `TableAnimesComponent`: Componente de presentación que renderiza la lista de animes.
 *
 * Importa `SharedModule` para componentes compartidos y `AnimeRoutingModule` para la configuración de rutas.
 */
@NgModule({
  declarations: [
    AnimesComponent,
    ListAnimesComponent,
    TableAnimesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }