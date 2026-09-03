import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arqui-soft',
    loadChildren: () =>
      import('./modules/arquitectura-de-software/arquitectura-de-software-module')
        .then(m => m.ArquitecturaDeSoftwareModule)
  },
  {
    path: '**',
    redirectTo: 'arqui-soft'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
