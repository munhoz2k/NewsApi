import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(
    express.json(),
    express.urlencoded({ extended: true })
)

export { app }