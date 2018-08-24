import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feedRef: AngularFireList<ChatMessage>;
  feed: Observable<ChatMessage>

  constructor(private chat: ChatService) {

   }

  ngOnInit() {

    console.log('feed initializing!')

    this.feed = this.chat.getMessageFeed();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessageFeed();
    //this.feed = this.chat.getMessages().subscribe(); // also possible
  }
}
