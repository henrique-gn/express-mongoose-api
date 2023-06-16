import { describe, it, expect } from 'vitest'
import { makeCustomer } from './factories/customer.factory'
import { Api } from './providers/api'

describe('Customer e2e test', () => {
  const customer = makeCustomer()
  let id: string
  const endpoit = '/customers'

  it('should create a customer', async () => {
    const { data, status } = await Api.post(endpoit, customer)
    id = data._id
    expect(status).toBe(201)
    expect(data.name).toStrictEqual(customer.name)
  })

  it('should list customers', async () => {
    const { data, status } = await Api.get(endpoit)
    expect(status).toBe(200)
    expect(data.length).toBeGreaterThan(0)
  })

  it('should get a customer', async () => {
    const { data, status } = await Api.get(`${endpoit}/${id}`)
    expect(status).toBe(200)
  })

  it('should update a customer', async () => {
    const { status } = await Api.patch(`${endpoit}/${id}`, { name: 'new name' })
    expect(status).toBe(200)
    const { data } = await Api.get(`${endpoit}/${id}`)
    expect(data.name).toBe('new name')
  })

  it('should delete a customer', async () => {
    const { status } = await Api.delete(`${endpoit}/${id}`)
    expect(status).toBe(204)
    const { status: status2 } = await Api.get(`${endpoit}/${id}`).catch(e => e.response)
    expect(status2).toBe(404)
  })
})
