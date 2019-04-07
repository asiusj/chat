import { Component, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/app/strore/chat.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Observable<Message[]>;

  constructor(public store: Store<ChatState>) { }

  ngOnInit() {
    this.messages = this.store.select('chat');
  }

}
