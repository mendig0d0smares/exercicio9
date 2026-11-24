const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const usuarioController = require('./controller/usuario.controller')
const contaController = require('./controller/conta.controller')
const movimentoController = require('./controller/movimento.controller')
const hostname = 'localhost'
const PORT = 3000

//middleware
app.use(express.urlencoded({extended: true})),
app.use(express.json()),
app.use(cors())
//

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario/:id', usuarioController.consultar)

app.post('/conta', contaController.cadastrar)
app.get('/conta/:id', contaController.consultar)

app.post('/movimento', movimentoController.cadastrar)
app.get('/movimento/:id', movimentoController.consultar)

app.get('/', (req,res)=>{
    res.json({message: ' rodando'})
})
//

conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log('servidor rodando')
    })
})
.catch((err)=>{
    console.error('erro')
})