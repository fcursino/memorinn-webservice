import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.send('MemorInn API')
})

export default router