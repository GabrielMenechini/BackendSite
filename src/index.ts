import express, { Router } from 'express'
import sequesize from './config/database'
import UserRoutes from './routes/UserRoutes'
import GameRoutes from './routes/GameRoutes'
import CollectionRoutes from './routes/CollectionRoutes'
import StudioRoutes from './routes/StudioRoutes'
import LoginRoutes from './routes/LoginRoutes'


const app = express()
const port = 3000

app.get('/', (req, res) => {
     res.send('Hello, World! :) ')
})

app.use(express.json())
app.use(UserRoutes)
app.use(GameRoutes)
app.use(CollectionRoutes)
app.use(StudioRoutes)
app.use(LoginRoutes)



//sync  database 
sequesize
     .sync({ alter: true })
    .then(() => {
         console.log('database foi sincronizado com sucesso')
    })   
    .catch((error) => {
         console.log('deu ruim aqui ó', error)
     })
app.listen(port, () => {
    console.log('Server está rodando na porta  ', port)
})