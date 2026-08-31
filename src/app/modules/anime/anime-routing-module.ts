import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimesComponent } from './animes.component';
import { ListAnimesComponent } from './pages/list-animes.component/list-animes.component';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }