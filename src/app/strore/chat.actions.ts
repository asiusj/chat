import { Action } from '@ngrx/store';
import { Message } from '../models/message';


export const ADD_NEW_MESSAGE = '[CHAT] Add';
export const REMOVE_MESSAGE = '[CHAT] Remove';
export const ADD_LIKE_TO_MESSAGE = '[LIKE] Add';
export const REMOVE_LIKE_FROM_MESSAGE = '[LIKE] Remove';

export class AddNewMessage implements Action {
  readonly type = ADD_NEW_MESSAGE;
  constructor(public payload: Message) { }
}

export class RemoveMessage implements Action {
  readonly type = REMOVE_MESSAGE;
  constructor(public payload: number) { }
}

export class AddLike implements Action {
  readonly type = ADD_LIKE_TO_MESSAGE;
  constructor(public payload: number) { }
}

export class RemoveLike implements Action {
  readonly type = REMOVE_LIKE_FROM_MESSAGE;
  constructor(public payload: number) { }
}

export type Actions = AddNewMessage
                     | RemoveMessage
                     | AddLike
                     | RemoveLike;
