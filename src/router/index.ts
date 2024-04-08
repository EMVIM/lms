import routerx from 'express-promise-router'
import User from './userRouter'
// import Categories from './categoriesRouter'
import Courses from './coursesRoutes'

const router = routerx()
router.use('/users', User)
// router.use('/categories', Categories)
router.use('/courses', Courses)

export default router
