import { NextFunction, Request, Response } from "express";
import BookService from "../Services/BookService";
import IBook from "../Interfaces/IBook";

export default class BookController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private bookService: BookService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res
    this.req = req
    this.next = next
    this.bookService = new BookService()
  }

  public create = async () => {
    const book: IBook = {...this.req.body}
    const newBook = await this.bookService.create(book)
    return this.res.status(201).json({message: "Book registered"})
  }

  public async getAllBooks() {
    const books = await this.bookService.getAllBooks()
    return this.res.status(200).json(books)
  }

  public async getBookById() {
    const {id} = this.req.params
    const book = await this.bookService.getBookById(id)
    return this.res.status(200).json(book)
  }

  public async updateBookById() {
    const {id} = this.req.params
    const book: IBook = {...this.req.body}
    const updateBook = await this.bookService.updateBookById(id, book)
    return this.res.status(200).json(updateBook)
  }

  public async deleteBookById() {
    const {id} = this.req.params
    await this.bookService.deleteBookById(id)
    return this.res.status(200).json({message: "Book deleted"})
  }
}
