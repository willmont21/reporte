import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesPorClienteComponent } from './reportes-por-cliente/reportes-por-cliente.component';
import { ListadodeClienteComponent } from './listadode-cliente/listadode-cliente.component';
import { ReporteComponent } from './reporte/reporte.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesPorClienteComponent,
    ListadodeClienteComponent,
    ReporteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
