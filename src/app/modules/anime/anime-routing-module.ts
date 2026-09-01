import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimesComponent } from './animes.component';
import { ListAnimesComponent } from './pages/list-animes.component/list-animes.component';

/**
 * Definición de rutas hijas para el módulo de Anime.
 *
 * Configura la ruta raíz del módulo para cargar `AnimesComponent` como contenedor
 * y `ListAnimesComponent` como vista por defecto (hija).
 */
const routes: Routes = [
  {
    path: '',
    component: AnimesComponent,
    children: [
      {
        path: '',
        component: ListAnimesComponent
      }
    ]
  }
];

/**
 * Módulo de enrutamiento para el módulo de Anime.
 *
 * Se encarga de gestionar la configuración y exportación de las rutas hijas
 * correspondientes a la sección de anime mediante `RouterModule.forChild()`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }