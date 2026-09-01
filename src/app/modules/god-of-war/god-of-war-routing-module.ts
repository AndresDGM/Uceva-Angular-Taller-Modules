import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListGodOfWarCharacters } from './pages/list-god-of-war-characters.component/list-god-of-war-characters.component';

/**
 * Arreglo de rutas hijas configuradas para el módulo God of War.
 *
 * @remarks
 * Define la ruta `characters` que renderiza el componente contenedor `ListGodOfWarCharacters`.
 */
const routes: Routes = [
  {
    path: 'characters',
    component: ListGodOfWarCharacters,
  },
];

/**
 * Módulo de enrutamiento para el módulo God of War.
 *
 * @remarks
 * Responsable de la configuración y gestión de la navegación dentro del módulo God of War.
 * Registra las rutas asociadas mediante `RouterModule.forChild(routes)`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodOfWarRoutingModule {}