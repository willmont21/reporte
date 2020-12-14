import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from '../app/components/home/home.component';
import { ListadodeClienteComponent } from '../app/components/listadode-cliente/listadode-cliente.component';
import { ReporteComponent } from '../app/components/reporte/reporte.component';
import { ReportesPorClienteComponent } from '../app/components/reportes-por-cliente/reportes-por-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { CargaArchivosComponent } from '../app/components/carga-archivos/carga-archivos.component'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'reporte', component:ReporteComponent },
  { path: 'reportecliente', component:ReportesPorClienteComponent},
  { path: 'listado', component:ListadodeClienteComponent},
  { path: 'carga', component:CargaArchivosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
