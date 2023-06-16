import { Customer } from '@/database/models/customer'
import { Product } from '@/database/models/product'
import { NextFunction, Request, Response } from 'express'
export async function verifyOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { customerId, productId, quantity } = req.body

    const customer = await Customer.findById(customerId)
    if (!customer) {
      return res.status(404).json('Customer not found')
    }
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json('Product not found')
    }
    if (product.stock < quantity) {
      return res.status(400).json('Insufficient stock')
    }
    req.body.customer = customer
    req.body.product = product

    next()
  } catch (error) {
    next(error)
  }
}
