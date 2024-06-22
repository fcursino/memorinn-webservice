import { Router } from "express";
import UserController from "../Controllers/UserController";

const userRouter = Router()

userRouter.post('/users/login', (req, res, next) => new UserController(req, res, next).loginUser())
userRouter.post('/users', (req, res, next) => new UserController(req, res, next).create())


export default userRouter