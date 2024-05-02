import IBook from "../Interfaces/IBook";
import BookODM from "../Models/BookODM";
import Book from "../Domains/Book";

export default class BookService {
  private bookODM = new BookODM();

  private createBook(book: IBook) {
    return new Book(book);
  }

  create = async (book: IBook) => {
    const newBook = await this.bookODM.create(book)
    return this.createBook(newBook)
  }

  public async getAllBooks() {
    const books = await this.bookODM.getAllBooks()
    return books.map(book => this.createBook(book))
  }

  public async getBookById(id: string) {
    const book = await this.bookODM.getBookById(id)
    if(!book) return null
    return this.createBook(book)
  }

  public async updateBookById(id: string, book: IBook) {
    const updateBook = await this.bookODM.updateBookById(id, book)
    return this.createBook(book)
  }

  public async deleteBookById(id: string) {
    await this.bookODM.deleteBookById(id)
  }
}