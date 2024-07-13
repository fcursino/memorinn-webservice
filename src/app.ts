import express from 'express'
import bookRouter from './Routers/routerBook'
import userRouter from './Routers/routerUser'
import commentRouter from './Routers/routerComment'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', bookRouter)
app.use('/', userRouter)
app.use('/', commentRouter)

export default app