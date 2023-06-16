import { describe, it, expect, beforeAll, test } from 'vitest'
import { Api } from './providers/api'
import { CustomerResponse, makeCustomer } from './factories/customer.factory'
import { ProductResponse, makeProduct } from './factories/product.factory'
import { OrderResponse } from './factories/order.factory'

describe('Order e2e test', async () => {
  const endpoit = '/orders'

  let order: OrderResponse
  const { data: customer } = (await Api.post('/customers', makeCustomer())) as {
    data: CustomerResponse
  }
  const { data: product } = (await Api.post('/products', makeProduct())) as {
    data: ProductResponse
  }
  const request = { customerId: customer._id, productId: product._id, quantity: 1 }

  it('should create a order', async () => {
    const { data, status } = await Api.post(endpoit, request)
    order = data
    expect(status).toBe(201)
    expect(data.customer).toStrictEqual(customer)
  })

  it('should list orders', async () => {
    const { data, status } = await Api.get(endpoit)
    expect(status).toBe(200)
    expect(data.length).toBeGreaterThan(0)
  })

  it('should get a order', async () => {
    const { data, status } = await Api.get(`${endpoit}/${order._id}`)
    expect(status).toBe(200)
  })

  it('should close a order', async () => {
    await Api.patch(`${endpoit}/close/${order._id}`)
    const { data, status } = await Api.get(`${endpoit}/${order._id}`)
    expect(status).toBe(200)
    expect(data.closed).toBe(true)
  })
})
