import { ICategories } from 'interfaces/categoriesInterface'
import models from '../models'
import { Request, Response } from 'express'
import resources from '../resource/index'

interface MulterRequest extends Request {
   files?: {
      image?: {
         path: string
      }
   }
}

const register = async (req: MulterRequest, res: Response): Promise<any> => {
   try {
      /* TIPS: verifica la duplicidad de la categoria */
      let valid_categories = await models.Categories.findOne({ tittle: req.body.title })
      if (valid_categories) {
         res.status(409).json({
            message: 'LA CATEGORIA YA EXISTE',
         })
      }
      /* TIPS: verifica si existe una imagen, luego crea la imagen */
      if (req.files && req.files.image) {
         let img_path = req.files.image.path // uploads\\carpeta\\nameImage.jpg
         let name = img_path.split('\\')
         let imagen_name = name[2]
         req.body.image = imagen_name
      }

      let NewCategories: ICategories = await models.Categories.create(req.body)
      const categoryResource = resources.categories.resource_categories(NewCategories)

      res.status(200).json(categoryResource)
   } catch (error) {
      res.status(500).json({
         message: 'Server error',
      })
   }
}

export default {
   register,
}
