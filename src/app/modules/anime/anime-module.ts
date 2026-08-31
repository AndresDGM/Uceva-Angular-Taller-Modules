import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRoutingModule } from './anime-routing-module';
import { SharedModule } from '../shared/shared-module';
import { AnimesComponent } from './animes.component';
import { TableAnimesComponent } from './components/table-animes.component/table-animes.component';
import { ListAnimesComponent } from './pages/list-animes.component/list-animes.component';

@NgModule({
  declarations: [
    AnimesComponent,
    ListAnimesComponent,
    TableAnimesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }