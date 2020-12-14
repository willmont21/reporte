import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { NgForm } from '@angular/forms';  
import { DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFormComponent } from 'devextreme-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  title = String;
  usuario = User;
  
  userSet = {
    nombre:'',
    pass:''
  }

  constructor(private userService: UserService,
    private router: Router) {}
  
  
  ngOnInit(): void {
    console.log('login.component cargado !!');
  }

  onSubmint() {
      this.userService.signIn(this.userSet)
      .subscribe(
        res=> {
          if(res.roll == "Admin")
            this.router.navigate(['/home']);
          else
           this.router.navigate(['/reportecliente']);
        },
        error => {console.log(<any>error);}
      );
    }  
}