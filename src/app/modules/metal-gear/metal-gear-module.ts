import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetalGearRoutingModule } from './metal-gear-routing-module';
import { MetalGearComponent } from './metal-gear.component'; 
@NgModule({
  declarations: [
    MetalGearComponent
  ],
  imports: [
    CommonModule,
    MetalGearRoutingModule
  ]
})
export class MetalGearModule { }
