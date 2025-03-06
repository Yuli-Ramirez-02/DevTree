import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express()
connectDB()

//Read form data
app.use(express.json())

app.use('/', router)


export default app