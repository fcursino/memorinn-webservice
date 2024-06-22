import { NextFunction, Request, Response } from "express";

export default class UserController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  // private bookService: BookService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res
    this.req = req
    this.next = next
    // this.bookService = new BookService()
  }

  public create = async () => {
    const user: IUser = {...this.req.body}
    const newUser = await this.userService.create(user)
    return this.res.status(201).json({message: "User registered"})
  }

  }
}