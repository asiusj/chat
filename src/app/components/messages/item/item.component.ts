import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ChatState } from 'src/app/strore/chat.state';
import { Store } from '@ngrx/store';
import { RemoveMessage, AddLike, RemoveLike } from 'src/app/strore/chat.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Message;

  currentUser: User = new User();
  constructor(
    public store: Store<ChatState>
  ) { }

  ngOnInit() {
    this.currentUser.likedItems = [];
  }

  removeItem(id: number) {
    console.log(`SENDING REQUEST TO REMOVE MESSAGE WITH id=${id}`);
    this.store.dispatch(new RemoveMessage(id));
  }

  likeItem(id: number) {
    if (this.currentUserLike(id) >= 0) {
      console.log(`SENDING REQUEST TO REMOVE LIKE FROM MESSAGE WITH id=${id}`);
      this.store.dispatch(new RemoveLike(id));
      this.currentUser.likedItems.splice(this.currentUserLike(id));
    } else {
      console.log(`SENDING REQUEST TO ADD LIKE TO MESSAGE WITH id=${id}`);
      this.store.dispatch(new AddLike(id));
      this.currentUser.likedItems.push(id);
    }
  }

  currentUserLike(id: number) {
    return this.currentUser.likedItems.indexOf(id);
  }
}
