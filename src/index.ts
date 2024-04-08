import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import * as path from 'path'
import router from './router'

dotenv.config()

// TIPS: Conexión a la base de datos
const dbUrl: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/dblms'

mongoose
   .connect(dbUrl)
   .then(() => console.log(`Conectado a la base de datos MongoDB en ${dbUrl}`))
   .catch((err: any) => console.error('Error de conexión a la base de datos:', err))

const app = express()

// TIPS: Configuración de middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router)
// test sd
const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`El servidor se está ejecutando en el puerto ${port}`)
})
