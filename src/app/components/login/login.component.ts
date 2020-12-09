import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { NgForm } from '@angular/forms';  



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  title = String;
  usuario = User;
  public isError = false;
  public isErrorGoogle = false;
  public loginError = "";
  
  User = {
    nombre:'',
    pass:''
  }

  constructor(private userService: UserService,
    private router: Router) {}
  
  
  ngOnInit(): void {
    console.log('login.component cargado !!');
  }

  signIn(f: NgForm) {
    if (f.valid) {this.userService.signIn(this.User)
      .subscribe(
        res=> {
          this.router.navigate(['/listado']);
        },
        error => {
          this.isError = true;
          this.loginError = error.error;
          setTimeout(() => {
            this.isError = false;
          }, 5000);
        }
      );  
    }
  }
}