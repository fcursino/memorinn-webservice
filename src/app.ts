import express from 'express'
import router from './Routers/router'
import bookRouter from './Routers/routerBook'

const app = express()
app.use(express.json())
app.use('/', bookRouter)

export default app