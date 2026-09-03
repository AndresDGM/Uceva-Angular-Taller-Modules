import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitecturaDeSoftwareComponent } from './arquitectura-de-software.component';
import { ListArquitecturaDeSoftwareComponent } from './pages/list-arquitectura-de-software.component/list-arquitectura-de-software.component';

/**
 * Definición de rutas hijas para el módulo de Arquitectura de Software.
 *
 * Configura la ruta raíz del módulo para cargar `ArquitecturaDeSoftwareComponent` como contenedor
 * y `ListArquitecturaDeSoftwareComponent` como vista por defecto (hija).
 */
const routes: Routes = [
  {
    path: '',
    component: ArquitecturaDeSoftwareComponent,
    children: [
      {
        path: '',
        component: ListArquitecturaDeSoftwareComponent
      }
    ]
  }
];

/**
 * Módulo de enrutamiento para el módulo de Arquitectura de Software.
 *
 * Se encarga de gestionar la configuración y exportación de las rutas hijas
 * correspondientes a la sección de arquitectura de software mediante `RouterModule.forChild()`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaDeSoftwareRoutingModule { }

