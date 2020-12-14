import { Injectable } from '@angular/core';
import { Reporte} from '../models/reporte'
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReporetesService {
  datos: Reporte[] = [];

  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  cargarReportes(data: Reporte){
   
    return this.http.post<any>(this.URL +'/reporte', data);

  }
}
