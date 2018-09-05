import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //user: Observable<firebase.User>;
  //user: Promise<firebase.User>;
  user: firebase.User;
  userEmail: string;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private userService: UserService) 
  { 
    console.log('Init Navbar');
  }

  ngOnInit() 
  {
    console.log('OnInit Navbar');

    var lUser = this.userService.getCurrentUser();
    lUser.then(user => {
      this.userEmail = user.email;
      this.user = user;
    }).catch (err => console.log(err));

    // new try
    //this.user = this.userService.getCurrentUser();
    //this.user.then(user => {
    //  this.userEmail = user.email;
    //}).catch (err => console.log(err));
    

    //this.user.subscribe(user => {
    //  if(user)
    //  {
    //    console.log('we have a user');
    //    this.userEmail = user.email;
    //  }
    //  else
    //  {
    //    console.log('no user');
    //    //this.router.navigate(['login']);
    //  }
    //  
    //});

    console.log('OnInit Navbar - complete');
  }

  logout()
  {
    console.log('logout');
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }

  login()
  {
    this.router.navigate(['/login']);
  }
}
