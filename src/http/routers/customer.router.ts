import e from 'express'
import {
  createCustomer,
  findCustomer,
  listCustomers,
  removeCustomer,
  updateCustomer,
} from '@/http/controllers/customer.controller'

export const customerRouter = e.Router()

customerRouter
  .get('/', listCustomers)
  .get('/:id', findCustomer)
  .post('/', createCustomer)
  .patch('/:id', updateCustomer)
  .delete('/:id', removeCustomer)
