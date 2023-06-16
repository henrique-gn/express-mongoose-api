import { Schema, model } from 'mongoose'
import { productSchema } from './product'
import { customerSchema } from './customer'

export const orderSchema = new Schema({
  product: { type: productSchema, required: true },
  quantity: { type: Number, required: true },
  customer: { type: customerSchema, required: true },
  createdAt: { type: Date, default: Date.now },
  closed: { type: Boolean, default: false },
})

export const Order = model('Order', orderSchema)
