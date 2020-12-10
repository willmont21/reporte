import { Injectable } from '@angular/core';
import { Cliente} from '../models/cliente'
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListaClientesService {
  clientes: Cliente[] = [];

  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<any[]>(this.URL + '/cliente');
  }

  busqueda(user: { nombre: string; }) {
    return this.http.post<any>(this.URL + 'login', user);
  }
}
