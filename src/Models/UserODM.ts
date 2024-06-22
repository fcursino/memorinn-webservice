import { Schema, Model, model, models } from "mongoose";
import IUser from "../Interfaces/IUser";

export default class UserODM {
  private schema: Schema;
  private model: Model<IUser>;

  constructor() {
    this.schema = new Schema<IUser>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      userName: { type: String, required: true },
      password: { type: String, required: true }
    })

    this.model = models.Users || model("Users", this.schema);
  }

  public async create(user: IUser) {
    return this.model.create({...user})
  }

  public async getAllUsers() {
    const users = await this.model.find()
    return users
  }

  public async getUserById(id: string) {
    const user = await this.model.findOne({_id: id})
    return user
  }

  public async updateUserById(id: string, user: IUser) {
    const updateUser = await this.model.findOneAndUpdate({_id: id}, user, {
      new: true,
    })
    return updateUser
  }

  public async deleteUserById(id: string) {
    await this.model.findOneAndDelete({_id: id})
  }
}