import { Message } from '../models/message';

export interface ChatState {
  readonly chat: Message[];
}
