import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principios-de-arquitectura',
    loadChildren: () => import('./modules/principios-de-arquitectura/principios-de-arquitectura-module').then(m => m.PrincipiosDeArquitecturaModule)
  },
  {
    path: 'sistemas-diseno',
    loadChildren: () => import('./modules/sistemas-de-diseno/sistemas-de-diseno-module').then(m => m.SistemasDeDisenoModule)
  },
  {
    path: '',
    redirectTo: 'sistemas-diseno',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'sistemas-diseno'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
