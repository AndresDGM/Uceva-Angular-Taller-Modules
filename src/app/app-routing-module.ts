import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Implementa carga perezosa (Lazy Loading) para los módulos funcionales:
 * - Arquitectura de Software (`/arqui-soft`)
 * - Principios de Arquitectura (`/principios-de-arquitectura`)
 * - Sistemas de Diseño (`/sistemas-diseno`)
 */
const routes: Routes = [
  {
    path: 'arqui-soft',
    loadChildren: () =>
      import('./modules/arquitectura-de-software/arquitectura-de-software-module')
        .then(m => m.ArquitecturaDeSoftwareModule)
  },
  {
    path: 'principios-de-arquitectura',
    loadChildren: () =>
      import('./modules/principios-de-arquitectura/principios-de-arquitectura-module')
        .then(m => m.PrincipiosDeArquitecturaModule)
  },
  {
    path: 'sistemas-diseno',
    loadChildren: () =>
      import('./modules/sistemas-de-diseno/sistemas-de-diseno-module')
        .then(m => m.SistemasDeDisenoModule)
  },
  {
    path: '',
    redirectTo: 'arqui-soft',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'arqui-soft'
  },
];

/**
 * Módulo de enrutamiento principal de la aplicación.
 *
 * @remarks
 * Configura el enrutador raíz utilizando `RouterModule.forRoot(routes)`.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

