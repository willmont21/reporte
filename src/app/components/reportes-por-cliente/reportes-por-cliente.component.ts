import { Component, OnInit } from '@angular/core';
import { ReporteclienteService } from '../../service/reportecliente.service';
import { Reporte} from '../../models/reporte'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reportes-por-cliente',
  templateUrl: './reportes-por-cliente.component.html',
  styleUrls: ['./reportes-por-cliente.component.css'],
  providers: [ReporteclienteService]
})
export class ReportesPorClienteComponent implements OnInit {
  title = "NOMBRE";
  repo: Reporte[] = [];
  
  constructor(private reporte: ReporteclienteService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("uno")
    this.traerReportes();
  }

  traerReportes() {
    this.reporte.getReporte().subscribe(res => {
      this.reporte.reportes = res as Reporte[];
      this.repo = res; 
      console.log(this.repo)
    })
   
  }

}
