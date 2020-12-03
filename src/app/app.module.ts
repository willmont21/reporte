import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesPorClienteComponent } from './reportes-por-cliente/reportes-por-cliente.component';
import { ListadodeClienteComponent } from './listadode-cliente/listadode-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesPorClienteComponent,
    ListadodeClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
