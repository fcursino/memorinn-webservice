import IUser from "../Interfaces/IUser";
import UserODM from "../Models/UserODM";
import User from "../Domains/User";
import ICredentials from "../Interfaces/ICredentials";
import jwt from 'jsonwebtoken'

export default class UserService {
  private userODM = new UserODM();

  private createUser(user: IUser) {
    return new User(user);
  }

  create = async (user: IUser) => {
    const userUsingEmail = await this.userODM.getUserByEmail(user.email)
    if(userUsingEmail) return null
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

  public async loginUser(credentials: ICredentials) {
    const user = await this.userODM.getUserByEmail(credentials.email)
    if(!user) return null
    if(!(credentials.password === user.password)) return null
    const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET || '')
    return {user: this.createUser(user), token}
  }
}