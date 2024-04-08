import { ICategories } from 'interfaces/categoriesInterface'

export default {
   resource_categories: (categories: ICategories) => {
      return {
         _id: categories._id,
         tittle: categories.title,
         image: categories.image
            ? `${process.env.URL_BACKEND}/api/categories/imagen-categorie/${categories.image}`
            : null,
         state: categories.state,
      }
   },
}
