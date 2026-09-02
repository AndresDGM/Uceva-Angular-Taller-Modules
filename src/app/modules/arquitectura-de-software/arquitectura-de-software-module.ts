import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';
import { TableArquitecturaDeSoftwareComponent } from './components/table-arquitectura-de-software.component/table-arquitectura-de-software.component';
import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software.component';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software.component/list-arquitectura-de-software.component';


@NgModule({
  declarations: [
    TableArquitecturaDeSoftwareComponent,
    ArquitecturaDeSoftwareComponent,
    ListArquitecturaDeSoftwareComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaDeSoftwareRoutingModule
  ]
})
export class ArquitecturaDeSoftwareModule { }
