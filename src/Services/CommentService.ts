import IComment from "../Interfaces/IComment";
import CommentODM from "../Models/CommentODM";
import Comment from "../Domains/Comment";

export default class CommentService {
  private commentODM = new CommentODM();

  private createComment(comment: IComment) {
    return new Comment(comment);
  }

  create = async (comment: IComment) => {
    const newComment = await this.commentODM.create(comment)
    return this.createComment(newComment)
  }

  public async getAllComments() {
    const comments = await this.commentODM.getAllComments()
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
}