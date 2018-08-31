import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

// login example
// https://github.com/FouomaOscar/firebase-authentication-with-angular-6/blob/master/src/app/core/auth.service.ts
export class LoginFormComponent implements OnInit 
{
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) 
  { 
  }
  ngOnInit() 
  {
    console.log('ngOnInit LoginFormComponent');
  }
  login()
  {
    console.log('login() called from login-form component');
    var cred = this.authService.login(this.email, this.password)
    .catch(error => {
      console.log(error.message);
      this.errorMsg = error.message;
      //this.router.navigate(['login']);
    });

    if(cred)
    {
      this.router.navigate(['chat']);
    }
  }
}
