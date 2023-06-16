import { Customer } from '@/database/models/customer'
import { Order } from '@/database/models/order'
import { Product } from '@/database/models/product'
import e from 'express'

export async function createOrder(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { customer, product, quantity } = req.body
    const order = await Order.create({ customer, product, quantity })
    res.status(201).json(order)
  } catch (error) {
    next(error)
  }
}

export async function listOrders(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
}

export async function findOrder(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const order = await Order.findById(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
}

export async function closeOrder(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { id } = req.params
    const response = await Order.updateOne({ _id: id }, { closed: true })
    if (response.modifiedCount == 0) return res.status(200).send('Order already closed')
    res.status(200).json('Order closed')
  } catch (error) {
    next(error)
  }
}
