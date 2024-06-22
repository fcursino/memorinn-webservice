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

  public async login () {

  }
}