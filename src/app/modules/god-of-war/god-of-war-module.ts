import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodOfWarRoutingModule } from './god-of-war-routing-module';
import { TableGodOfWarCharactersComponent } from './components/table-god-of-war-characters.component/table-god-of-war-characters.component';
import { ListGodOfWarCharacters } from './pages/list-god-of-war-characters.component/list-god-of-war-characters.component';

/**
 * Módulo principal de God of War.
 *
 * @remarks
 * Encapsula la funcionalidad completa del módulo God of War:
 * - Declara los componentes `TableGodOfWarCharactersComponent` (presentacional) y `ListGodOfWarCharacters` (contenedor).
 * - Importa `CommonModule` para las directivas comunes de Angular y `GodOfWarRoutingModule` para la navegación interna.
 */
@NgModule({
  declarations: [
    TableGodOfWarCharactersComponent,
    ListGodOfWarCharacters
  ],
  imports: [
    CommonModule,
    GodOfWarRoutingModule
  ]
})
export class GodOfWarModule { }