import express from 'express'
import { setupRoutes } from './routers'
import { setupMiddleware } from './middleware'

export const app = express()

setupMiddleware(app)
setupRoutes(app)

export function start() {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}
