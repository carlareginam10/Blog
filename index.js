const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send("funcionando")
})

const rotas = require('./rotas')
app.use('/api', rotas)

const port = 3009

// dirname resolve automaticamente todo o caminho de diretórios até o diretório atual
// essa é a conexão front-end back-end
app.use(express.static(__dirname + '/client'))

app.listen(port, ()=> {
    console.log("servidor rodando", port)
})
