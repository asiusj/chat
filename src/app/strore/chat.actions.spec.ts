import { AddNewMessage, ADD_NEW_MESSAGE, AddLike } from './chat.actions';
import { Message } from '../models/message';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MessagesComponent } from '../components/messages/messages.component';
import { chatReducer } from './chat.reducers';
import { StoreModule, Store } from '@ngrx/store';
import { ItemComponent } from '../components/messages/item/item.component';
import { MatCardModule, MatBadgeModule, MatIconModule } from '@angular/material';
import { ChatState } from './chat.state';
import { ChatComponent } from '../components/chat/chat.component';
import { AppModule } from '../app.module';

describe('AddNewMessage', () => {
  it('should call addNewMessage method', () => {
    const action = new AddNewMessage(new Message('test Message', 0, 0));
    expect(action.type).toEqual(ADD_NEW_MESSAGE);
  });
});

describe('Create MessageComponent and store', () => {
  let messagesComponent: ComponentFixture<MessagesComponent>;
  let store: Store<ChatState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    messagesComponent = TestBed.createComponent(MessagesComponent);
  });

  describe('STORE item.likes equal Component item.likes', () => {

    let messages: Message[];

    beforeEach(async(() => {
      messagesComponent.detectChanges();
      store.select('chat').subscribe((r: Message[]) => {
        messages = r;
      });
      console.log('messages current instance: ', messages);
      messages.map((m) => {
        store.dispatch(new AddLike(m.id));
      });
      messagesComponent.detectChanges();
    }));

    it('should check item.likes in store and item.likes in component', () => {

      messages.map((m) => {
        const item: HTMLElement = messagesComponent
          .nativeElement.querySelector('app-item[data-itemid="' + m.id + '"]');
        const span = item.querySelector(':scope span').querySelector(':scope span.mat-badge-content.mat-badge-active');
        expect(messages.filter((mess) => {
          return mess.id === m.id;
        })[0].likes).toEqual(parseInt(span.innerHTML, 10));
      });
      console.log('messages current instance: ', messages);

    });
  });

});
