import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../models/reporte';
import { DxFileUploaderModule } from "devextreme-angular";


@Component({
  selector: 'app-carga-archivos',
  templateUrl: './carga-archivos.component.html',
  styleUrls: ['./carga-archivos.component.css']
})
export class CargaArchivosComponent implements OnInit {

  data : Reporte [] = [];

  constructor() { }

  load(e: any){
    
  }

  

  ngOnInit(): void {
  }

}
