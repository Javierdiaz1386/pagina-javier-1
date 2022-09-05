import express from 'express'
const app = express()
import indexRoutes from './routes/index.js'
import {dirname,join} from "path"
import{fileURLToPath} from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))
app.set('views', __dirname + '/views')

app.set("view engine",'ejs')


app.listen(process.env.PORT || 3000)

console.log(`escuchando en el puerto `,process.env.PORT ||3000)
