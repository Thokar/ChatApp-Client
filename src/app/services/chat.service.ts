import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMessagesRef: AngularFireList<ChatMessage>;
  chatMessages: Observable<any[]>;
  chatMessage: ChatMessage;
  username: Observable<string>;

  constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
  ) { 
    //var newDB = db.database.refFromURL('https://zeta-flare-143011.firebaseio.com');

    //newDB.push('test');
    //var child = new AngularFireDatabaseModule();
    //.child('messages');

    //var testDB = new AngularFireDatabase('https://zeta-flare-143011.firebaseio.com');

    //console.log(AngularFireModule);

    //var x = AngularFireModule.toString();

    var database = firebase.database();
    firebase.database().ref().push().set('text');


    this.chatMessagesRef = db.list('messages');
    this.chatMessages = this.chatMessagesRef.valueChanges();

    this.afAuth.authState.subscribe(auth => {
      if( auth !== undefined && auth !== null)
      {
        this.user = auth;
      }
      console.log('Called constructor!');
    })
  }

  sendMessage(msg: string) {

    const timestap = this.getTimeStamp();
    //const email = this.user.email;
    const email = 'testEmail';
    //this.chatMessages = this.getMessages();

    // V1
    //this.chatMessages.push({

    // V2 :// https://forum.ionicframework.com/t/firebaselistobservable-issue/109671/2
    //this.db.list('/messages').push({ 
    //  message: msg,
    //  timeSent: timestap,
    //  //userName: this.userName,
    //  userName: 'userName',
    //  email: email, 
    //}).then(() => {
    //  // message is sent
    //});

    // V3: // https://github.com/angular/angularfire2/issues/1180
    this.chatMessagesRef.push({ 
        message: msg,
        timeSent: timestap,
        //userName: this.userName,
        userName: 'userName',
        email: email, 
      }).then( () => {
        console.log('push and then');
      }

      );
      // V4: ? https://stackoverflow.com/questions/14190268/is-push-currently-not-working-in-firebase-or-am-i-doing-something-wrong

    console.log('Called sendMessage()!');
  }

  getTimeStamp(): Date {
    const now = new Date();
    const date = now.getUTCFullYear() + '/'  + 
                (now.getUTCMonth() +1) + '/'
                now.getUTCDate();
    const time = now.getUTCHours + ':'  + 
                now.getUTCMinutes + ':'
                now.getUTCSeconds;

                return  new Date(date + ' ' + time);

  }

  getMessageFeed() : Observable<any> {
    // query to create our message feed binding
    console.log('Called getMessageFeed()!');
    return this.db.list('messages', ref => ref.limitToLast(25).orderByKey()).valueChanges();
  }
}
