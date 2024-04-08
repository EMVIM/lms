import { ICourses } from 'interfaces/coursesInterface'
import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema(
   {
      title: { type: String, maxlength: 250, required: true },
      description: { type: String, maxlength: 250, required: true },
      precio: { type: Number, required: true },
      state: { type: Number, default: 1 }, //1 ES ACTIVO 2 ES INACTIVO
   },
   {
      timestamps: true,
   }
)

const Courses = mongoose.model<ICourses>('courses', CourseSchema)
export default Courses
