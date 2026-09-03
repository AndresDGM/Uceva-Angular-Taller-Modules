import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * Módulo compartido (SharedModule) que contiene componentes, directivas y pipes reutilizables.
 *
 * @remarks
 * Exporta componentes transversales a la aplicación como:
 * - {@link BadgeComponent}
 * - {@link IconComponent}
 * - {@link NavbarComponent}
 *
 * Permite que cualquier módulo de características (feature module) reutilice estos elementos
 * importando únicamente `SharedModule`.
 */
@NgModule({
  declarations: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }

