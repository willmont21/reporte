import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ListaClientesService } from '../../service/lista-clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'OFISTORE S.A.';
  clie = Cliente;

  userNam = {
    name: '',
  }
  constructor(private buscado: ListaClientesService, private router: Router) { }

  ngOnInit(): void {
    console.log("home works")
  }

  clientes() {
    this.router.navigate(['/listado']);
  }

  onSubmint() {
    this.buscado.busqueda(this.userNam)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/reportecliente']);

        },
        error => {
          console.log(<any>error);
        }
      );
  }
}


