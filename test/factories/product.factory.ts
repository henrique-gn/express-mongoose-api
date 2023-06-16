import { randomInt } from 'crypto'

export type Product = {
  name: string
  price: number
  stock: number
}

export type ProductResponse = Product & {
  _id: string
  __v: number
}

export function makeProduct(override?: Partial<Product>): Product {
  const key = Date.now()

  return {
    name: `product-${key}`,
    price: randomInt(100) + 0.99,
    stock: 4,
    ...override,
  }
}
