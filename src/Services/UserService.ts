import IUser from "../Interfaces/IUser";
import UserODM from "../Models/UserODM";
import User from "../Domains/User";

export default class UserService {
  private userODM = new UserODM();

  private createUser(user: IUser) {
    return new User(user);
  }

  create = async (user: IUser) => {
    const newUser = await this.userODM.create(user)
    return this.createUser(newUser)
  }

  public async getAllUsers() {
    const users = await this.userODM.getAllUsers()
    return users.map(user => this.createUser(user))
  }

  public async getUserById(id: string) {
    const user = await this.userODM.getUserById(id)
    if(!user) return null
    return this.createUser(user)
  }

  public async updateUserById(id: string, user: IUser) {
    const updateUser = await this.userODM.updateUserById(id, user)
    return this.createUser(user)
  }

  public async deleteUserById(id: string) {
    await this.userODM.deleteUserById(id)
  }
}