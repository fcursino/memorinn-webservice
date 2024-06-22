import express from 'express'
import bookRouter from './Routers/routerBook'
import userRouter from './Routers/routerUser'

const app = express()
app.use(express.json())
app.use('/', bookRouter)
app.use('/', userRouter)

export default app