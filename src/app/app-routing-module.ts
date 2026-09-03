import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principios-de-arquitectura',
    loadChildren: () => import('./modules/principios-de-arquitectura/principios-de-arquitectura-module').then(m => m.PrincipiosDeArquitecturaModule)
  },
  {
    path: '**',
    redirectTo: 'principios-de-arquitectura'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
