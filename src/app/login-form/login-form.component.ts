import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

// login example
// https://github.com/FouomaOscar/firebase-authentication-with-angular-6/blob/master/src/app/core/auth.service.ts
export class LoginFormComponent implements OnInit 
{
  loginForm: FormGroup;
  //email: string; //depricated
  //password: string; //depricated
  errorMsg: string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private fb: FormBuilder) 
  { 
    this.createForm();
  }
  ngOnInit() 
  {
    console.log('ngOnInit LoginFormComponent');
  }

  // depricated
  //login()
  //{
  //  console.log('login() called from login-form component');
  //  var cred = this.authService.login(this.email, this.password)
  //  .catch(error => {
  //    console.log(error.message);
  //    this.errorMsg = error.message;
  //    //this.router.navigate(['login']);
  //  });
//
  //  if(cred)
  //  {
  //    this.router.navigate(['chat']);
  //  }
  //}
  createForm()
  {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }
  tryFacebookLogin()
  {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/chat']);
    });
  }
  tryTwitterLogin()
  {
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/chat']);
    });
  }
  tryGoogleLogin()
  {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/chat']);
    });
  }
  tryLogin(value)
  {
    console.log('tryLogin');
    this.authService.doLogin(value)
    .then(res => 
    {
      this.router.navigate(['/chat']);
    }, err => {
      console.log(err);
      this.errorMsg = err.message;
    });
  }
}
