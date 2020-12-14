import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxBoxModule } from 'devextreme-angular';
import { Cliente } from '../../models/cliente';
import { ListaClientesService } from '../../service/lista-clientes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listadode-cliente',
  templateUrl: './listadode-cliente.component.html',
  styleUrls: ['./listadode-cliente.component.css'],
  providers: [ListaClientesService]
})
export class ListadodeClienteComponent implements OnInit {

  todos: Cliente[] = [];

  constructor(private clientes: ListaClientesService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("paso uno")
    this.traerClientes();
  }

  traerClientes() {
    this.clientes.getClientes().subscribe(res => {
      this.clientes.clientes = res as Cliente[];
      this.todos = res;
      console.log(this.todos)
    })
  }
}
