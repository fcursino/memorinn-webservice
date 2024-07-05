import { Schema, Model, model, models } from "mongoose";
import IComment from "../Interfaces/IComment";

export default class CommentODM {
  private schema: Schema;
  private model: Model<IComment>;

  constructor() {
    this.schema = new Schema<IComment>({
      text: { type: String, required: true },
      userOwner: { type: Object, required: true },
      bookId: { type: String, required: true }
    })

    this.model = models.Comments || model("Comments", this.schema);
  }

  public async create(comment: IComment) {
    return this.model.create({...comment})
  }

  public async getAllComments() {
    const books = await this.model.find()
    return books
  }

  public async getCommentById(id: string) {
    const comment = await this.model.findOne({_id: id})
    return comment
  }

  public async updateCommentById(id: string, comment: IComment) {
    const updateComment = await this.model.findOneAndUpdate({_id: id}, comment, {
      new: true,
    })
    return updateComment
  }

  public async deleteCommentById(id: string) {
    await this.model.findOneAndDelete({_id: id})
  }
}