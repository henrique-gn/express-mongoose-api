import { NextFunction, Request, Response } from 'express'

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
}
