import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SharedModule } from '../shared/shared-module';
import { MetalGearRoutingModule } from './metal-gear-routing-module';
import { MetalGearComponent } from './metal-gear.component'; 
import { TableMetalGearComponent } from './components/table-metal-gear/table-metal-gear.component';
import { ListMetalGearComponent } from './pages/list-metal-gear/list-metal-gear.component';
@NgModule({
  declarations: [
    MetalGearComponent,
    TableMetalGearComponent,
    ListMetalGearComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MetalGearRoutingModule
  ]
})
export class MetalGearModule { }
