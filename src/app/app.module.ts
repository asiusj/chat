import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormComponent } from './components/form/form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ItemComponent } from './components/messages/item/item.component';
import { StoreModule } from '@ngrx/store';
import { chatReducer } from './strore/chat.reducers';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatBadgeModule,
  MatTooltipModule, MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FormComponent,
    MessagesComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ chat: chatReducer }),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    StoreModule
  ]
})
export class AppModule { }
