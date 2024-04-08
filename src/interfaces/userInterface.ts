export interface IUser extends Document {
   _id: string
   rol: string
   name: string
   surname?: string
   email: string
   password: string
   avatar?: string
   state?: number
   phone?: string
   birthday?: string
   is_instructor?: number
   profession?: string
   description?: string
}
