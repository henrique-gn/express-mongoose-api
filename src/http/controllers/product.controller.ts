import { Product } from '@/database/models/product'
import e from 'express'

export async function createProduct(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { name, stock, price } = req.body
    const product = await Product.create({ name, stock, price })
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

export async function listProducts(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export async function findProduct(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

export async function updateProduct(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { id } = req.params
    const response = await Product.updateOne({ _id: id }, req.body)
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

export async function removeProduct(req: e.Request, res: e.Response, next: e.NextFunction) {
  try {
    const { id } = req.params
    const response = await Product.deleteOne({ _id: id })
    res.status(204).json(response)
  } catch (error) {
    next(error)
  }
}
