import { Schema, model } from 'mongoose'

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
})

export const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    type: addressSchema,
    required: true,
  },
})

export const Customer = model('Customer', customerSchema)
