import { Customer } from '@/database/models/customer'
import e from 'express'

export async function createCustomer(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { name, email, address } = req.body
    const customer = await Customer.create({ name, email, address })
    res.status(201).json(customer)
  } catch (error) {
    next(error)
  }
}

export async function listCustomers(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const customers = await Customer.find()
    res.status(200).json(customers)
  } catch (error) {
    next(error)
  }
}

export async function findCustomer(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const customer = await Customer.findById(req.params.id)
    if (!customer) {
      res.status(404).json('Customer not found')
      return
    }
    res.status(200).json(customer)
  } catch (error) {
    next(error)
  }
}

export async function updateCustomer(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { id } = req.params
    await Customer.updateOne({ _id: id }, req.body)
    res.status(200).json('Customer updated')
  } catch (error) {
    next(error)
  }
}

export async function removeCustomer(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { id } = req.params
    await Customer.deleteOne({ _id: id })
    res.status(204).json('Customer deleted')
  } catch (error) {
    next(error)
  }
}
