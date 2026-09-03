import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';

import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software.component';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software.component/list-arquitectura-de-software.component';
import { TableArquitecturaDeSoftwareComponent } from './components/table-arquitectura-de-software.component/table-arquitectura-de-software.component';
import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';

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