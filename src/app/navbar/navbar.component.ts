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
  user: Promise<any>;
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

    this.user = this.userService.getCurrentUser();
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
  }

  login()
  {

  }

}
