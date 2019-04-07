import { Message } from '../models/message';
import * as ChatActions from './chat.actions';

const initState = [
  new Message('text1', 2, 0),
  new Message('text2', 0, 1)
];


export function chatReducer(state: Message[] = initState, action: ChatActions.Actions) {
  switch (action.type) {
    case ChatActions.ADD_NEW_MESSAGE: {
      return [
        ...state, action.payload
      ];
    }
    case ChatActions.REMOVE_MESSAGE: {
      const index = state.map(message => message.id).indexOf(action.payload);
      state.splice(index, 1);
      return state.sort((a, b) => {
        return b.likes - a.likes;
      });
    }
    case ChatActions.ADD_LIKE_TO_MESSAGE: {
      const index = state.map(message => message.id).indexOf(action.payload);
      state[index].likes++;
      return state.sort((a, b) => {
        return b.likes - a.likes;
      });
    }
    case ChatActions.REMOVE_LIKE_FROM_MESSAGE: {
      const index = state.map(message => message.id).indexOf(action.payload);
      state[index].likes--;
      return state.sort((a, b) => {
        return b.likes - a.likes;
      });
    }
    default: {
      return state.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

  }
}

