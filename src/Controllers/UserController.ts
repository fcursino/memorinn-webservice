import { NextFunction, Request, Response } from "express";
import UserService from "../Services/UserService";
import ICredentials from "../Interfaces/ICredentials";
import IUser from "../Interfaces/IUser";

export default class UserController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private userService: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res
    this.req = req
    this.next = next
    this.userService = new UserService()
  }

  public create = async () => {
    const user: IUser = {...this.req.body}
    const newUser = await this.userService.create(user)
    return this.res.status(201).json({message: "User registered"})
  }

  public async loginUser () {
    const credentials: ICredentials = {...this.req.body}
    const user = await this.userService.loginUser(credentials)
    this.res.status(201).json(user)
  }
}