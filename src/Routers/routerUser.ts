import { Router } from "express";
import UserController from "../Controllers/UserController";
import verifyAccessToken from "../Middlewares/auth";

const userRouter = Router()

userRouter.post('/users/login/:token?', (req, res, next) => new UserController(req, res, next).loginUser())
userRouter.post('/users', (req, res, next) => new UserController(req, res, next).create())
userRouter.get('/users', (req, res, next) => new UserController(req, res, next).getAllUsers())


export default userRouter