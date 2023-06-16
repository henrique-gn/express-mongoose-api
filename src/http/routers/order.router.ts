import e from 'express'
import { closeOrder, createOrder, findOrder, listOrders } from '@/http/controllers/order.controller'
import { verifyOrder } from '../middleware/order.middleware'

export const orderRouter = e.Router()

orderRouter
  .get('/', listOrders)
  .get('/:id', findOrder)
  .post('/', verifyOrder, createOrder)
  .patch('/close/:id', closeOrder)
