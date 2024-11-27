import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/user.route.js'
import imageRouter from './routes/image.route.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
    res.send('API WORKING FINE')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})