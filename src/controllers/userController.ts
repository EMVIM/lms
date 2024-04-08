import models from '../models'
import * as bcrypt from 'bcryptjs'
import token from '../service/token'
import { Request, Response } from 'express'
import { IUser } from 'interfaces/userInterface'
import User from '../models/userModels'

const register = async (req: Request, res: Response): Promise<Response<IUser>> => {
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const userData = new User({
         rol: req.body.rol,
         name: req.body.username,
         surname: req.body.surname,
         email: req.body.email,
         password: hashedPassword,
      })

      const savedUser = await userData.save()
      return res.status(200).json({ user: savedUser })
   } catch (error) {
      return res.status(500).send({
         message: 'OCURRIO UN PROBLEMA',
      })
   }
}

export default register

/* export default {
   login: async (req: Request, res: Response) => {
      try {
         // TIPS: SEARCH EMAIL USER
         const user: IUser | null = await models.User.findOne({
            email: req.body.email,
            state: 1,
         })

         if (user) {
            // TIPS: COMPARAR LAS CONTRASEÑA
            let compare = await bcrypt.compare(req.body.password, user.password)

            if (compare) {
               // TIPS: UN USUARIO EXISTENTE Y ACTIVO
               let tokenT = await token.encode(user._id, user.rol, user.email)

               const USER_BODY = {
                  token: tokenT,
                  user: {
                     name: user.name,
                     surname: user.surname,
                     email: user.email,
                     // avatar: user.avatar
                  },
               }
               res.status(200).json({
                  USER: USER_BODY,
               })
            } else {
               res.status(500).send({
                  message: 'EL USUARIO INGRESADO NO EXISTE',
               })
            }
         } else {
            res.status(500).send({
               message: 'EL USUARIO INGRESADO NO EXISTE',
            })
         }
      } catch (error) {
         console.log(error)
         res.status(500).send({
            message: 'HUBO UN ERROR',
         })
      }
   },
} */
