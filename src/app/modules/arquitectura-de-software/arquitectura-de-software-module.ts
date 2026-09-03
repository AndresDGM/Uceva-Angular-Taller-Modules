import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';

import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software.component';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software.component/list-arquitectura-de-software.component';
import { TableArquitecturaDeSoftwareComponent } from './components/table-arquitectura-de-software.component/table-arquitectura-de-software.component';
import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';

/**
 * Módulo funcional que agrupa las funcionalidades y vistas de Arquitectura de Software.
 *
 * @remarks
 * Este módulo declara los componentes de presentación y contenedor para
 * la sección de Arquitectura de Software, e importa `SharedModule` para componentes comunes
 * y `ArquitecturaDeSoftwareRoutingModule` para el enrutamiento perezoso (Lazy Loading).
 *
 * @example
 * ```ts
 * // En app-routing-module.ts
 * {
 *   path: 'arqui-soft',
 *   loadChildren: () => import('./modules/arquitectura-de-software/arquitectura-de-software-module')
 *     .then(m => m.ArquitecturaDeSoftwareModule)
 * }
 * ```
 */
@NgModule({
  declarations: [
    ArquitecturaDeSoftwareComponent,
    ListArquitecturaDeSoftwareComponent,
    TableArquitecturaDeSoftwareComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArquitecturaDeSoftwareRoutingModule,
  ],
})
export class ArquitecturaDeSoftwareModule {}