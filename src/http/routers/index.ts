import e from 'express'
import { productRouter } from './product.router'
import { orderRouter } from './order.router'
import { customerRouter } from './customer.router'

export function setupRoutes(app: e.Application) {
  app.use('/api/products', productRouter)
  app.use('/api/orders', orderRouter)
  app.use('/api/customers', customerRouter)
}
