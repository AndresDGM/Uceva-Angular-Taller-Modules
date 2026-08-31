import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMetalGearComponent } from './pages/list-metal-gear/list-metal-gear.component';

const routes: Routes = [
  {
    path: 'list-metal-gear',
    component: ListMetalGearComponent
  },
  {
    path: '**',
    redirectTo: 'list-metal-gear'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetalGearRoutingModule { }
