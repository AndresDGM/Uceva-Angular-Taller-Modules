import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Implementa carga perezosa (Lazy Loading) para el módulo de Arquitectura de Software
 * y redirecciona cualquier ruta desconocida o vacía a `arqui-soft`.
 */
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

