import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import  * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// more auth https://gist.github.com/codediodeio/5e02b605f2ab015f2fb1e60497bd46bf
export class AuthService {
  private UsersRef: AngularFireList<User>;
  private user: Observable<firebase.User>;
  private userObject: firebase.User;
  private authState: any;

  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase, 
    private router: Router) 
    {
      console.log("check authState");
      this.user = afAuth.authState;

      this.afAuth.authState.subscribe(auth => {
        if( auth !== undefined && auth !== null)
        {
          this.userObject = auth;
          const status = 'online';
          this.setUserStatus(status);
        }
      });
    }
    authUser() 
    {
      return this.user;
    }
    get currentUserId(): string 
    {
      return this.authState !== null ? this.authState.uid: '';
    }
    login(email: string, password: string)
    {
      console.log('login');
      var loginResult =  this.afAuth.auth.signInWithEmailAndPassword
      (email, password);

      return loginResult;
    }
    signUp(email: string, password: string, displayName: string)
    {
      return this.afAuth.auth.createUserWithEmailAndPassword
      (
        email,
        password,
      ).then((user) => 
        {
          this.authState = user;
          const status = 'online';
          this.setUserData(
            email, 
            displayName, 
            status,
            user.user.uid,
          )}
      ).catch(error => console.log(error));
    }
    logout()
    {
      const status = 'offine';
      this.setUserStatus(status);
      this.afAuth.auth.signOut();
      this.router.navigate(['login']);
    }
    setUserData(
      email: string,
      displayName: string, 
      status: string,
      userId: string): void 
    {
      try {
        const list = this.db.list('users');
        list.push({ 
          displayName: displayName,
          email: email,
          status: status,
          uid: userId,
        });

        /* works ok:
        const pushId = this.db.createPushId();
        const item =  { 
          displayName: displayName,
          email: email,
          status: status,
          uid: userId,
          id: pushId,
          indexOn: "uid",
        };
        this.UsersRef.set(item.id, item);
        */
      }
      catch(error)
      { 
        console.log(error)
      } 
    } 
    setUserStatus(status: string): void 
    {
      const path = `users/${this.currentUserId}`;
      const data = {
        status: status
      }
      this.db.object(path).update(data)
      .catch(error => console.log(error));
    }
    doFacebookLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.FacebookAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
      })
    }
  
    doTwitterLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.TwitterAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
      })
    }
  
    doGoogleLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
      })
    }
  
    doRegister(value){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
      })
    }
  
    doLogin(value){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
      })
    }
  
    doLogout(){
      return new Promise((resolve, reject) => {
        if(firebase.auth().currentUser){
          this.afAuth.auth.signOut()
          resolve();
        }
        else{
          reject();
        }
      });
    }
  
}
