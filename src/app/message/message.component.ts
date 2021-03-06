import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { ChatMessage } from '../models/chat-message.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;

  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: string; //  Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(
    private authService: AuthService,
    private userService: UserService) 
  { 
    console.log('ctor ChatMessage');
    //authService.authUser().subscribe( user =>
    //{
    //  this.ownEmail = user.email;
    //  this.isOwnMessage = this.ownEmail == this.userEmail;
    //})

    var lUser = this.userService.getCurrentUser();
    lUser.then(user => {
      this.userEmail = user.email;
      this.isOwnMessage = this.ownEmail == this.userEmail;
      this.userName = user.displayName;
      //this.user = user;
      //this.userObservable =  new Observable( obj => {obj.next(user);})

    }).catch (err => { 
        console.log(err);
        //this.router.navigate(['/login']);
    });
  }

  ngOnInit(chatMessage = this.chatMessage) 
  {
    console.log('ngOnInit ChatMessage');
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}
