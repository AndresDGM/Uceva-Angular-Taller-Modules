import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipiosDeArquitecturaRoutingModule } from './principios-de-arquitectura-routing-module';
import { PrincipiosDeArquitecturaComponent } from './principios-de-arquitectura.component';
import { TablePrincipiosDeArquitecturaComponents } from './components/table-principios-de-arquitectura.components/table-principios-de-arquitectura.components';
import { ListPrincipiosDeArquitecturaComponent } from './pages/list-principios-de-arquitectura.component/list-principios-de-arquitectura.component';
import { PrincipiosDeArquitecturaService } from './services/principios-de-arquitectura.service/principios-de-arquitectura.service';


@NgModule({
  declarations: [
    PrincipiosDeArquitecturaComponent,
    TablePrincipiosDeArquitecturaComponents,
    ListPrincipiosDeArquitecturaComponent,
    PrincipiosDeArquitecturaService
  ],
  imports: [
    CommonModule,
    PrincipiosDeArquitecturaRoutingModule
  ]
})
export class PrincipiosDeArquitecturaModule { }
