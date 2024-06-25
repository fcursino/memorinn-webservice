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
    const login = await this.userService.loginUser(credentials)
    this.res.status(200).json(login)
  }

  public async getAllUsers() {
    const users = await this.userService.getAllUsers()
    return this.res.status(200).json(users)
  }

  public async getUserById() {
    const {id} = this.req.params
    const user = await this.userService.getUserById(id)
    return this.res.status(200).json(user)
  }

  public async updateUserById() {
    const {id} = this.req.params
    const user: IUser = {...this.req.body}
    const updateUser = await this.userService.updateUserById(id, user)
    return this.res.status(200).json(updateUser)
  }

  public async deleteUserById() {
    const {id} = this.req.params
    await this.userService.deleteUserById(id)
    return this.res.status(200).json({message: "User deleted"})
  }
}