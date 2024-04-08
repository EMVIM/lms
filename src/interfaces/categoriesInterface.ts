export interface ICategories extends Document {
   _id: string
   title: string
   image: string | null
   state: number
}
