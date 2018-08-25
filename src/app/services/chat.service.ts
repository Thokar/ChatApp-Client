import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
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
  user: firebase.User;
  chatMessagesRef: AngularFireList<ChatMessage>;
  chatMessages: Observable<any[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
  ) { 
    this.chatMessagesRef = db.list('messages');
    this.chatMessages = this.chatMessagesRef.valueChanges();

    this.afAuth.authState.subscribe(auth => {
      if( auth !== undefined && auth !== null)
      {
        this.user = auth;
      }

      this.getUser().valueChanges().subscribe( a=> 
        {
         // this.userName = a.displayName;
        });
      console.log('Called constructor!');
    });

  }

  // see https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md
  getUser()
  {
    //const userId = this.user.uid;
    //const path = `/users/${userId}`;

    return this.db.list('users');
  }

  getUsers()
  {
    const path = `/users`;
    return this.db.list(path);
  }

  sendMessage(msg: string) {

    const timestamp = new Date(); //this.getTimeStamp();
    const email = this.user.email;
    const userName = this.userName;
    // V3: // https://github.com/angular/angularfire2/issues/1180
    this.chatMessagesRef.push({ 
        message: msg,
        timeSent: timestamp.toString(),
        userName:  "karl", //this.userName,
        email: email, 
      }).then( () => {
        console.log('push and then');
      }

      );
      // V4: ? https://stackoverflow.com/questions/14190268/is-push-currently-not-working-in-firebase-or-am-i-doing-something-wrong
    console.log('Called sendMessage()!');
  }

  getMessageFeed() : Observable<any> {
    // query to create our message feed binding
    console.log('Called getMessageFeed()!');
    return this.db.list('messages', ref => ref.limitToLast(25).orderByKey()).valueChanges();
  }

    //getTimeStamp():Date{
  //  const now = new Date();
  //  console.log(now);
//
  //  const date = now.getUTCFullYear() + '-'  + 
  //              (now.getUTCMonth() +1) + '-'
  //              now.getUTCDate();
  //  const time = now.getUTCHours + ':'  + 
  //              now.getUTCMinutes + ':'
  //              now.getUTCSeconds;
//
  //  return new Date( date + ' ' + time);
//
  //}
}
