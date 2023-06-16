import { Schema, model } from 'mongoose'

export const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
})

export const Product = model('Product', productSchema)
