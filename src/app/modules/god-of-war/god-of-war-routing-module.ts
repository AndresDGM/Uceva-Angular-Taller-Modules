import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListGodOfWarCharacters } from './pages/list-god-of-war-characters.component/list-god-of-war-characters.component';

const routes: Routes = [
  {
    path: 'characters',
    component: ListGodOfWarCharacters,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodOfWarRoutingModule {}