import routerx from 'express-promise-router'
import register from '../controllers/userController'

const router = routerx()

router.post('/register', register)

export default router
