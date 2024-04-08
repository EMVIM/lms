import routerx from 'express-promise-router'
import coursesController from '../controllers/coursesController'

const router = routerx()

router.post('/register', coursesController.register)
router.get('/findAll', coursesController.findAll)
router.put('/update/:id', coursesController.updateCourse)
router.delete('/delete/:id', coursesController.deleteCourse)

export default router
