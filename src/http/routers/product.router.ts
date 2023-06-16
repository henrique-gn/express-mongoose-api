import e from 'express'
import {
  createProduct,
  findProduct,
  listProducts,
  removeProduct,
  updateProduct,
} from '@/http/controllers/product.controller'

export const productRouter = e.Router()

productRouter
  .get('/', listProducts)
  .get('/:id', findProduct)
  .post('/', createProduct)
  .patch('/:id', updateProduct)
  .delete('/:id', removeProduct)
