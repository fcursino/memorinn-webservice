import IUser from "./IUser";

export default interface IComment {
  id?: string;
  text: string;
  userOwner: IUser;
  bookId: string;
  date: string;
}