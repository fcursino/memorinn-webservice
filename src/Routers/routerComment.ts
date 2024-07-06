import { Router } from 'express'
import CommentController from '../Controllers/CommentController'

const commentRouter = Router()

commentRouter.post('/comments', (req, res, next) => new CommentController(req, res, next).create())
commentRouter.get('/comments', (req, res, next) => new CommentController(req, res, next).getAllComments())
commentRouter.get('/comments/:id', (req, res, next) => new CommentController(req, res, next).getCommentById())
commentRouter.delete('/comments/:id', (req, res, next) => new CommentController(req, res, next).deleteCommentById())
commentRouter.put('/comments/:id', (req, res, next) => new CommentController(req, res, next).updateCommentById())
commentRouter.post('/comments/book', (req, res, next) => new CommentController(req, res, next).getCommentsByBook())

export default commentRouter