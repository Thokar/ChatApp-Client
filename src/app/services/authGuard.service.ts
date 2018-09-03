import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
  ) 
  { }

  canActivate(): Promise<boolean> 
  {
    return new Promise((resolve, reject) => 
    {
      this.userService.getCurrentUser()
      .then( user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err =>  {
        return resolve(true);
      })
    });
  }
}
