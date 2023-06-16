import { Customer, CustomerResponse, makeCustomer } from './customer.factory'
import { Product, ProductResponse, makeProduct } from './product.factory'

export type Order = {
  product: Product
  quantity: number
  customer: Customer
}

export type OrderResponse = Order & {
  _id: string
  customer: CustomerResponse
  product: ProductResponse
}

export function makeOrder(override?: Partial<Order>): Order {
  return {
    customer: makeCustomer(),
    quantity: 1,
    product: makeProduct(),
    ...override,
  }
}
