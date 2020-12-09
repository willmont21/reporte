import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesPorClienteComponent } from '../app/components/reportes-por-cliente/reportes-por-cliente.component';
import { ListadodeClienteComponent } from '../app/components/listadode-cliente/listadode-cliente.component';
import { ReporteComponent } from '../app/components/reporte/reporte.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListadodemesComponent } from './components/listadodemes/listadodemes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesPorClienteComponent,
    ListadodeClienteComponent,
    ReporteComponent,
    HomeComponent,
    LoginComponent,
    ListadodemesComponent
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
