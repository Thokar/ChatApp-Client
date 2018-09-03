import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;
  
  constructor(private authService: AuthService, private router: Router) 
  { }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;

  var result = this.authService.signUp(
    email, 
    password, 
    displayName).catch(error => this.errorMsg = error.message);

    if(result)
    {
      this.router.navigate(['chat']);
    }
  }

  ngOnInit() {
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

}
