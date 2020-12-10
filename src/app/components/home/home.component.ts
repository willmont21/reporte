import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'OFISTORE S.A.';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clientes(){
    this.router.navigate(['/listado']);
  }
}
