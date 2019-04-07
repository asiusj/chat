export class Message {

  public text: string;
  public likes: number;
  public id: number;

  constructor(
    text: string,
    likes: number,
    id?: number
  ) {
    this.text = text;
    this.likes = likes;
    this.id = id;
  }
}
