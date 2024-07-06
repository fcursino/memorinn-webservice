import { NextFunction, Request, Response } from "express";
import CommentService from "../Services/CommentService";
import IComment from "../Interfaces/IComment";

export default class CommentController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private commentService: CommentService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.res = res
    this.req = req
    this.next = next
    this.commentService = new CommentService()
  }

  public create = async () => {
    const comment: IComment = {...this.req.body}
    const newComment = await this.commentService.create(comment)
    return this.res.status(201).json({message: "Comment registered"})
  }

  public async getAllComments() {
    const comments = await this.commentService.getAllComments()
    return this.res.status(200).json(comments)
  }

  public async getCommentById() {
    const {id} = this.req.params
    const comment = await this.commentService.getCommentById(id)
    return this.res.status(200).json(comment)
  }

  public async updateCommentById() {
    const {id} = this.req.params
    const comment: IComment = {...this.req.body}
    const updateComment = await this.commentService.updateCommentById(id, comment)
    return this.res.status(200).json(updateComment)
  }

  public async deleteCommentById() {
    const {id} = this.req.params
    await this.commentService.deleteCommentById(id)
    return this.res.status(200).json({message: "Comment deleted"})
  }

  public async getCommentsByBook() {
    const {bookId} = this.req.body
    const comments = await this.commentService.getCommentsByBook(bookId)
    return this.res.status(200).json(comments)
  }
}
