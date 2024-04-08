import { ICategories } from 'interfaces/categoriesInterface'
import mongoose, { Schema } from 'mongoose'

const CategoriesSchema = new Schema(
   {
      title: { type: String, maxlenght: 30, required: true },
      image: { type: String, maxlenght: 30, required: true },
      state: { type: Number, maxlenght: 1, default: 1 },
   },
   {
      timestamps: true,
   }
)

const Categories = mongoose.model<ICategories>('Categories', CategoriesSchema)

export default Categories
