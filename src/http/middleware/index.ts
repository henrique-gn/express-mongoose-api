import cors from 'cors'
import e from 'express'
import { errorHandler } from './error-handler.middleware'
import morgan from 'morgan'

export function setupMiddleware(app: e.Application) {
  app.use(cors())
  app.use(e.json())
  app.use(morgan('dev'))
  app.use(errorHandler)
}
