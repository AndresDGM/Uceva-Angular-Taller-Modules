import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sistemas-diseno',
    loadChildren: () => import('./modules/sistemas-de-diseno/sistemas-de-diseno-module').then(m => m.SistemasDeDisenoModule)
  },
  {
    path: '',
    redirectTo: 'sistemas-diseno',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
