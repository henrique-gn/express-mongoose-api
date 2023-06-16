import { describe, it, expect } from 'vitest'
import { makeProduct } from './factories/product.factory'
import { Api } from './providers/api'

describe('Product e2e test', () => {
  const product = makeProduct()
  let id: string
  const endpoit = '/products'

  it('should create a product', async () => {
    const { data, status } = await Api.post(endpoit, product)
    id = data._id
    expect(status).toBe(201)
    expect(data.name).toStrictEqual(product.name)
  })

  it('should list products', async () => {
    const { data, status } = await Api.get(endpoit)
    expect(status).toBe(200)
    expect(data.length).toBeGreaterThan(0)
  })

  it('should get a product', async () => {
    const { data, status } = await Api.get(`${endpoit}/${id}`)
    expect(status).toBe(200)
  })

  it('should update a product', async () => {
    const { status } = await Api.patch(`${endpoit}/${id}`, { name: 'new name' })
    expect(status).toBe(200)
    const { data } = await Api.get(`${endpoit}/${id}`)
    expect(data.name).toBe('new name')
  })

  it('should delete a product', async () => {
    const { status } = await Api.delete(`${endpoit}/${id}`)
    expect(status).toBe(204)
    const { status: status2 } = await Api.get(`${endpoit}/${id}`).catch(e => e.response)
    expect(status2).toBe(404)
  })
})
