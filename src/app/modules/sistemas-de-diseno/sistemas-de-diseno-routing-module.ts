import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasDeDisenoComponent } from './sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno.component/list-sistemas-de-diseno.component';

const routes: Routes = [
  {
    path: '',
    component: SistemasDeDisenoComponent,
    children: [
      {
        path: '',
        component: ListSistemasDeDisenoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasDeDisenoRoutingModule { }
