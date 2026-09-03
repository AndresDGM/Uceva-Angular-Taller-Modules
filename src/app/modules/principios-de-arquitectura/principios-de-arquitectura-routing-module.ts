import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrincipiosDeArquitecturaComponent } from './pages/list-principios-de-arquitectura.component/list-principios-de-arquitectura.component';

const routes: Routes = [
  {
    path: '',
    component: ListPrincipiosDeArquitecturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosDeArquitecturaRoutingModule { }
