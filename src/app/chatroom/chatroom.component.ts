import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})

export class ChatroomComponent implements OnInit, AfterViewChecked {
  //@ViewChild ('scroller') feedContainer: ElementRef;
  @ViewChild ('scroller', { read: ElementRef }) feedContainer: ElementRef;

  constructor() 
  { 
  }

  ngOnInit() 
  {
    this.feedContainer.nativeElement.value = "test";
  }

  scrollToBottom(): void
  {
    // Left also possible
    //this.feedContainer.nativeElement.scrollLeft
    this.feedContainer.nativeElement.scrollTop  
    = this.feedContainer.nativeElement.scrollHeight;
  }

  // https://alligator.io/angular/viewchild-access-component/
  // see https://angular.io/guide/lifecycle-hooks
  // and https://v2.angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngAfterViewChecked()
  {
    this.scrollToBottom();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }
}