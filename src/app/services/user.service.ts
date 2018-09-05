import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise'; not needed in A
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public afAuth: AngularFireAuth 
  ) { }

  getCurrentUser()
  {
    return new Promise<firebase.User>((resolve, reject) => 
    {
      var user = firebase.auth().onAuthStateChanged(
        function(user)
        {
          if (user)
          {
            resolve(user);
          } else
          {
            reject('No user logged in');
          }
        }
      )
    });
  }

  updateCurrentUser(value)
  {
    return new Promise((resolve, reject) => 
    {
      var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
          resolve();
          //resolve(res)
        }, err => reject(err))
    });
  }
}
