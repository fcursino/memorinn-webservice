import IBook from "../Interfaces/IBook";

export default class Book {
  readonly id: string | undefined;
  protected title: string;
  protected author: string;
  protected publicationYear: number;
  protected synopsis: string;

  constructor(book: IBook) {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.publicationYear = book.publicationYear;
    this.synopsis = book.synopsis;
  }
}