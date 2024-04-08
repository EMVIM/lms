import * as jwt from 'jsonwebtoken'
import models from '../models'

export default {
   encode: async (_id: string, rol: string, email: string) => {
      const token = jwt.sign({ _id: _id, rol: rol, email: email }, 'courses_udemy', {
         expiresIn: '1d',
      })
      return token
   },

   decode: async (token: string) => {
      try {
         const { _id } = jwt.verify(token, 'courses_udemy') as jwt.JwtPayload
         const user = models.User.findOne({ _id: _id, state: 1 })
         if (user) {
            return user
         }
         return false
      } catch (error) {
         console.log(error)
         return false
      }
   },
}
