import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FireBaseUserModel } from '../models/firebaseUserModel.model'

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<FireBaseUserModel>
{
  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FireBaseUserModel> 
  {
    let user = new FireBaseUserModel();

    return new Promise((resolve, reject) => 
    {
      this.userService.getCurrentUser()
      .then(res =>
      {
        if(res.providerData[0].providerId == 'password')
        {
          user.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else
        {
          user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => 
        {
          console.log('redirect login');
          //this.router.navigate(['/login']);
          return reject(err);
        }
      )
    });
  }
}
