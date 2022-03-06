import express from 'express'
import 'dotenv/config'

const app = express()

app.use(
    express.json(),
    express.urlencoded({ extended: true })
)

export { app }