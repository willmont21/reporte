import { Injectable } from '@angular/core';
import { Reporte} from '../models/reporte'
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReporteclienteService {
  reportes: Reporte[] = [];

  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getReporte() {
    return this.http.get<any[]>(this.URL + '/reporte');
  }
}
