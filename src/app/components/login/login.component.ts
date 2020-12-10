import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { NgForm } from '@angular/forms';  



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  title = String;
  usuario = User;
  public isError = false;
  public isErrorGoogle = false;
  public loginError = "";
  
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
  //signIn(f: NgForm) {
    //if(f.valid){
      this.userService.signIn(this.userSet)
      .subscribe(
        res=> {
          this.router.navigate(['/listado']);
        },
        error => {console.log(<any>error);}
      );
    }  
 // }
}