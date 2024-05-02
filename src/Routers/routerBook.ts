import { Router } from 'express'
import BookController from '../Controllers/BookController'

const bookRouter = Router()

bookRouter.post('/books', (req, res, next) => new BookController(req, res, next).create())
bookRouter.get('/books', (req, res, next) => new BookController(req, res, next).getAllBooks())
bookRouter.get('/books/:id', (req, res, next) => new BookController(req, res, next).getBookById())
bookRouter.delete('/books/:id', (req, res, next) => new BookController(req, res, next).deleteBookById())
bookRouter.put('/books/:id', (req, res, next) => new BookController(req, res, next).updateBookById())

export default bookRouter