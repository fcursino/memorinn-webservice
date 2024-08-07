import IComment from "../Interfaces/IComment";
import CommentODM from "../Models/CommentODM";
import Comment from "../Domains/Comment";

export default class CommentService {
  private commentODM = new CommentODM();

  private createComment(comment: IComment) {
    return new Comment(comment);
  }

  private registerCommentDate() {
    return new Date().toISOString()
  }

  create = async (comment: Partial<IComment>) => {
    const date = this.registerCommentDate()
    const newComment = await this.commentODM.create(comment, date, 0)
    console.log(newComment)
    return this.createComment(newComment)
  }

  public async getAllComments() {
    const comments = await this.commentODM.getAllComments()
    return comments.map(comment => this.createComment(comment))
  }

  public async getAllAcceptedComments() {
    const comments = await this.commentODM.getAllAcceptedComments()
    return comments.map(comment => this.createComment(comment))
  }

  public async getCommentById(id: string) {
    const comment = await this.commentODM.getCommentById(id)
    if(!comment) return null
    return this.createComment(comment)
  }

  public async updateCommentById(id: string, comment: IComment) {
    const updateComment = await this.commentODM.updateCommentById(id, comment)
    return this.createComment(comment)
  }

  public async deleteCommentById(id: string) {
    await this.commentODM.deleteCommentById(id)
  }

  public async getCommentsByBook(bookId: string) {
    const comments = await this.commentODM.getCommentsByBook(bookId)
    return comments.map(comment => this.createComment(comment))
  }
}