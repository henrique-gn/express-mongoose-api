import { randomInt } from 'crypto'

export type Customer = {
  name: string
  email: string
  address: {
    street: string
    city: string
    zip: string
  }
}

export type CustomerResponse = Customer & {
  _id: string
  __v: number
  address: {
    _id: string
  }
}

export function makeCustomer(override?: Partial<Customer>): Customer {
  const addresses: Array<{ street: string; city: string; zip: string }> = [
    {
      street: '123 Main St',
      city: 'New York',
      zip: '10001',
    },
    {
      street: '456 Elm St',
      city: 'Los Angeles',
      zip: '90001',
    },
    {
      street: '789 Oak St',
      city: 'Chicago',
      zip: '60601',
    },
    {
      street: '321 Pine St',
      city: 'San Francisco',
      zip: '94101',
    },
    {
      street: '654 Maple St',
      city: 'Seattle',
      zip: '98101',
    },
    {
      street: '987 Birch St',
      city: 'Miami',
      zip: '33101',
    },
    {
      street: '741 Cedar St',
      city: 'Dallas',
      zip: '75201',
    },
    {
      street: '852 Walnut St',
      city: 'Boston',
      zip: '02101',
    },
    {
      street: '963 Cherry St',
      city: 'Houston',
      zip: '77001',
    },
    {
      street: '159 Spruce St',
      city: 'Atlanta',
      zip: '30301',
    },
  ]
  const key = Date.now()
  return {
    name: `customer-${key}`,
    email: `customer-${key}`,
    address: addresses[randomInt(9)],
    ...override,
  }
}
