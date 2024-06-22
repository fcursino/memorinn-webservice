import IUser from "../Interfaces/IUser";

export default class User {
  readonly id: string | undefined;
  protected name: string;
  protected email: string;
  protected userName: string;
  protected password: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.userName = user.userName;
    this.password = user.password;
  }
}