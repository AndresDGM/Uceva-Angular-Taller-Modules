import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasDeDisenoComponent } from './sistemas-de-diseno.component';
import { ListSistemasDeDisenoComponent } from './pages/list-sistemas-de-diseno.component/list-sistemas-de-diseno.component';

/**
 * Configuración de rutas internas del módulo Sistemas de Diseño.
 *
 * @remarks
 * Define la ruta raíz del módulo que carga `SistemasDeDisenoComponent` como contenedor
 * y como vista hija por defecto `ListSistemasDeDisenoComponent`.
 */
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

/**
 * Módulo de enrutamiento para Sistemas de Diseño.
 *
 * @remarks
 * Se encarga de registrar las rutas hijas del módulo mediante `RouterModule.forChild(routes)`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasDeDisenoRoutingModule { }
