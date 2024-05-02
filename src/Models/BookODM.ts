import { Schema, Model, model, models } from "mongoose";
import IBook from "../Interfaces/IBook";

export default class BookODM {
  private schema: Schema;
  private model: Model<IBook>;

  constructor() {
    this.schema = new Schema<IBook>({
      title: { type: String, required: true },
      author: { type: String, required: true },
      publicationYear: { type: Number, required: true },
      synopsis: { type: String, required: true }
    })

    this.model = models.Books || model("Books", this.schema);
  }

  public async create(book: IBook) {
    return this.model.create({...book})
  }

  public async getAllBooks() {
    const books = await this.model.find()
    return books
  }

  public async getBookById(id: string) {
    const book = await this.model.findOne({_id: id})
    return book
  }

  public async updateBookById(id: string, book: IBook) {
    const updateBook = await this.model.findOneAndUpdate({_id: id}, book, {
      new: true,
    })
    return updateBook
  }

  public async deleteBookById(id: string) {
    await this.model.findOneAndDelete({_id: id})
  }
}