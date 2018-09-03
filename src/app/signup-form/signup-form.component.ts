import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  //email: string;
  //password: string;
  //displayName: string;
  registerFrom: FormGroup;
  errorMsg: string;
  successMsg: string;
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private fb: FormBuilder
  ) 
  { 
    this.createForm();
  }

  // legacy code
  //signUp() {
  //  const email = this.email;
  //  const password = this.password;
  //  const displayName = this.displayName;
//
  //var result = this.authService.signUp(
  //  email, 
  //  password, 
  //  displayName).catch(error => this.errorMsg = error.message);
//
  //  if(result)
  //  {
  //    this.router.navigate(['chat']);
  //  }
  //}

  ngOnInit() {
  }

  createForm()
  {
    this.registerFrom = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }

    )
  }
  tryRegister(value)
  {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMsg = "";
      this.successMsg = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMsg = err.message;
      this.successMsg = "";
    })
  }
  tryFacebookLogin()
  {
    this.authService.doFacebookLogin()
    .then(res =>{
      this.router.navigate(['/user']);
    }, err => console.log(err)
    )
  }
  tryTwitterLogin()
  {
    this.authService.doTwitterLogin()
    .then(res =>{
      this.router.navigate(['/user']);
    }, err => console.log(err)
    )
  }
  tryGoogleLogin()
  {
    this.authService.doGoogleLogin()
    .then(res =>{
      this.router.navigate(['/user']);
    }, err => console.log(err)
    )
  }
}
