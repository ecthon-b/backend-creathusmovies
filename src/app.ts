import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import { routes } from './routes/movies.routes'


const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)


export default app