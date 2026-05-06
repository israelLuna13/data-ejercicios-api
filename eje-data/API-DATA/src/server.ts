import express from 'express'
import routes from './routes/index.routes'
import { connectDB } from './config/connection'

const app = express()

connectDB()
app.use('/api/products',routes)
app.use('/api/sales',routes)
app.use('/api/gold',routes)


export default app
