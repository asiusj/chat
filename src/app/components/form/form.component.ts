import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/app/strore/chat.state';
import { AddNewMessage } from 'src/app/strore/chat.actions';
import { Message } from 'src/app/models/message';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  messageText = '';
  ids = 2;
  textFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(public store: Store<ChatState>) { }

  ngOnInit() {

  }

  newMessage() {
    if (this.messageText === '') { return; }
    this.store.dispatch(new AddNewMessage(new Message(this.messageText, 0, this.ids)));
    this.ids++;
    this.messageText = '';
  }

}
