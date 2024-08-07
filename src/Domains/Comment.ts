import IComment from "../Interfaces/IComment";
import IUser from "../Interfaces/IUser";

export default class Comment {
  readonly id: string | undefined;
  protected text: string;
  protected userOwner: IUser;
  protected bookId: string;
  protected date: string;
  protected accepted: number | undefined;

  constructor(comment: IComment) {
    this.id = comment.id;
    this.text = comment.text;
    this.userOwner = comment.userOwner;
    this.bookId = comment.bookId;
    this.date = comment.date;
    this.accepted = comment.accepted;
  }
}