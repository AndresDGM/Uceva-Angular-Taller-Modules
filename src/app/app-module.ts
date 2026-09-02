import { CommonModule } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared-module';
import { TablePrincipiosDeArquitecturaComponents } from './modules/principio-de-arquitectura/components/table-principios-de-arquitectura.components/table-principios-de-arquitectura.components';

@NgModule({
  declarations: [
    AppComponent,
    TablePrincipiosDeArquitecturaComponents,
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
