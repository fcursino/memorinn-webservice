import dotenv from 'dotenv'
import app from './app'
import mongoose from 'mongoose'

dotenv.config()

const MONGO_DB_URL = process.env.MONGO_DB_URL || ''

mongoose.connect(MONGO_DB_URL).then((data) => {
  console.log('MongoDB connection succeeded')
}).catch((error) => {
  console.log('Error in DB connection', error.message)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`))