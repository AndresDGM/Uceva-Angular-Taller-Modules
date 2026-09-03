import { CommonModule } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared-module';

/**
 * Módulo raíz de la aplicación.
 *
 * @remarks
 * Este módulo es el punto de partida que inicializa la aplicación Angular,
 * declara el componente raíz {@link AppComponent}, provee los servicios globales
 * (HttpClient, Listeners de errores globales) y carga el enrutamiento principal {@link AppRoutingModule}.
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

