import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';

import { ListadodeClienteComponent } from '../app/components/listadode-cliente/listadode-cliente.component';
import { ReporteComponent } from '../app/components/reporte/reporte.component';
import { ReportesPorClienteComponent } from '../app/components/reportes-por-cliente/reportes-por-cliente.component';

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
