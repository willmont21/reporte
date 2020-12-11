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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxLoadPanelModule, DxButtonModule, DxSelectBoxModule, DxAutocompleteModule, DxListModule, DxNumberBoxModule, DxTextBoxModule, DxDataGridModule, DxFileUploaderModule, DxPopupModule } from 'devextreme-angular';
import { DxFileManagerModule } from 'devextreme-angular'
import { DxAccordionModule, DxSwitchModule, DxCheckBoxModule, DxScrollViewModule, DxButtonGroupModule, DxRadioGroupModule, } from "devextreme-angular";
import { CargaArchivosComponent } from './components/carga-archivos/carga-archivos.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesPorClienteComponent,
    ListadodeClienteComponent,
    ReporteComponent,
    HomeComponent,
    LoginComponent,
    ListadodemesComponent,
    CargaArchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    DxLoadPanelModule,
    DxRadioGroupModule,
    DxButtonModule,
    DxButtonGroupModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxAutocompleteModule,
    DxSwitchModule,
    DxPopupModule,
    DxListModule,
    DxAccordionModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxFileManagerModule,
    DxDataGridModule,
    DxScrollViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
