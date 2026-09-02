import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDeDisenoRoutingModule } from './sistemas-de-diseno-routing-module';
import { TableSistemasDeDisenoComponent } from './components/table-sistemas-de-diseno.component/table-sistemas-de-diseno.component';
import { SistemasDeDisenoComponent } from './sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno.component/list-sistemas-de-diseno.component';


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
