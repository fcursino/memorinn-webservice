import IComment from "../Interfaces/IComment";
import IUser from "../Interfaces/IUser";

export default class Comment {
  readonly id: string | undefined;
  protected text: string;
  protected userOwner: IUser;
  protected bookId: number;

  constructor(comment: IComment) {
    this.id = comment.id;
    this.text = comment.text;
    this.userOwner = comment.userOwner;
    this.bookId = comment.bookId;
  }
}