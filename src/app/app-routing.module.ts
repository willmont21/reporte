import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListadodeClienteComponent } from './listadode-cliente/listadode-cliente.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReportesPorClienteComponent } from './reportes-por-cliente/reportes-por-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent },
  { path: 'reporte', component:ReporteComponent },
  { path: 'reportecliente', component:ReportesPorClienteComponent},
  { path: 'listado', component:ListadodeClienteComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
