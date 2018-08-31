import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireObject, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  itemRef: AngularFireObject<any>;
  user: firebase.User;
  userObj: User;
  chatUsers: Observable<User[]>;
  chatMessages: Observable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  userNameStr:string;

  userArray: User[];
 
  // https://dzone.com/articles/observables-with-the-angular-5
  // https://github.com/angular/angularfire2/issues/1220
  // https://stackoverflow.com/questions/48123366/how-i-can-call-observable-complete-callback-function-it-doesnt-work
  constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth) 
  { 
    console.log("ChatService constructor called");
    this.afAuth.authState.subscribe(auth => {
      if( auth !== undefined && auth !== null)
      {
        this.user = auth;
        this.chatMessages = this.getMessageFeed().valueChanges();
      }
      //this.userName = this.userObj.displayName;
      console.log('UserNameStr: ' + this.user.displayName);
      console.log('Called constructor!');
      //console.log(this.userObj.displayName);
    });
  }

  // gute referenz: https://grokonez.com/frontend/angular/angular-5-firebase-crud-operations-with-angularfire2-v5#2_Object
  // see https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md
  // interessant: https://stackoverflow.com/questions/50506896/angular-6-rxjs-pipe-not-working-on-valuechanges
  getUser() //:  User[]
  {
    console.log("Get User called");
    const uid = this.user.uid;

    // Solution?
    // https://github.com/angular/angularfire2/issues/1209
    var ab =  this.db.list<User>('/users', 
      ref => ref.orderByChild("uid")
      .limitToFirst(1)
      .equalTo(uid)
    )
    .valueChanges().subscribe(data => {
      this.userArray = data;
      },error => {console.log(error)
      }, () => {
        console.log("done");
      }
    );
    console.log("Get User called - complete");
  }

  getUsers()
  {
    const path = `/users`;
    return this.db.list(path).valueChanges();
  }

  // AngularFire List Doku
  // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
  sendMessage(msg: string) 
  {
    const timestamp = new Date(); //this.getTimeStamp();
    const email = this.user.email;
    const userName = this.userName;
    const uid = this.user.uid;


    this.db.list<User>('/users', 
      ref => ref.orderByChild("uid")
      .limitToFirst(1)
      .equalTo(uid)
    )
    .valueChanges().subscribe(data => {
      data.forEach  ( x => {

        if(x.uid === uid)
        {
          this.db.list('messages').push({ 
            message: msg,
            timeSent: timestamp.toString(),
            userName:  x.displayName, //this.userName,
            email: email, 
          }).then( () => {
            console.log('push and then');
          });
        }
        else 
        {
          console.log("not equal");
        }
      }) ;
      },error => {console.log(error)
      }, () => {
        console.log("done");
      }
    );



    console.log('this.username' + this.userNameStr);
    console.log('this.username' + this.userName);

    
    //console.log('Called sendMessage()!');
  }

  getMessageFeed(): AngularFireList<ChatMessage>
  {
    // query to create our message feed binding
    //console.log('Called getMessageFeed()!');
    return this.db.list('messages', ref => ref.limitToLast(25).orderByKey());
  }
}
