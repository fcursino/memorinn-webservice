import { Router } from "express";
import UserController from "../Controllers/UserController";

const userRouter = Router()

userRouter.post('/login', (req, res, next) => new UserController(req, res, next).login)

export default userRouter