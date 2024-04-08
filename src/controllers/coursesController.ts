import { Request, Response } from 'express'
import { ICourses } from 'interfaces/coursesInterface'
import Courses from '../models/coursesModels'

const register = async (req: Request, res: Response): Promise<Response<ICourses>> => {
   try {
      const CourseData = new Courses({
         title: req.body.title,
         description: req.body.description,
         precio: req.body.precio,
         state: req.body.state,
      })

      const saved = await CourseData.save()
      return res.status(200).json({ course: saved })
   } catch (error) {
      return res.status(500).send({
         message: 'OCURRIO UN PROBLEMA',
      })
   }
}

const findAll = async (req: Request, res: Response) => {
   try {
      const data = await Courses.find()
      return res.status(200).json({ data })
   } catch (error) {
      return res.status(500).send({
         message: 'OCURRIO UN PROBLEMA',
      })
   }
}

const updateCourse = async (req: Request, res: Response) => {
   try {
      const updateCourse = await Courses.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      })

      return res.status(200).json({ updateCourse })
   } catch (error) {
      return res.status(500).send({
         message: 'OCURRIO UN PROBLEMA',
      })
   }
}

const deleteCourse = async (req: Request, res: Response) => {
   try {
      const deleteCourse = await Courses.findByIdAndDelete(req.params.id)

      return res.status(200).json({ mensaje: 'Course eliminado correctamente', deleteCourse })
   } catch (error) {
      return res.status(500).send({
         message: 'OCURRIO UN PROBLEMA',
      })
   }
}

export default {
   register,
   findAll,
   updateCourse,
   deleteCourse,
}
