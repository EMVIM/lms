import token from './token'
import { Request, Response, NextFunction } from 'express'

export default {
   verifyTienda: async (req: Request, res: Response, next: NextFunction) => {
      if (!req.headers.token) {
         res.status(404).send({
            message: 'NO SE ENVIO EL TOKEN',
         })
      }
      const response = await token.decode(req.headers.token as string)
      if (response) {
         if (response.rol == 'cliente' || response.rol == 'admin') {
            next()
         } else {
            res.status(403).send({
               message: 'NO ESTA PERMITIDO VISTAR ESTA PAGINA',
            })
         }
      } else {
         res.status(403).send({
            message: 'EL TOKEN ES INVALIDO',
         })
      }
   },
   verifyAdmin: async (req: Request, res: Response, next: NextFunction) => {
      if (!req.headers.token) {
         res.status(404).send({
            message: 'NO SE ENVIO EL TOKEN',
         })
      }
      const response = await token.decode(req.headers.token as string)
      if (response) {
         if (response.rol == 'admin') {
            next()
         } else {
            res.status(403).send({
               message: 'NO ESTA PERMITIDO VISTAR ESTA PAGINA',
            })
         }
      } else {
         res.status(403).send({
            message: 'EL TOKEN ES INVALIDO',
         })
      }
   },
}
