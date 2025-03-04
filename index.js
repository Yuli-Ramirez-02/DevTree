const express = require('express')

const app = express()

//Routing
app.get('/', (req, res) => {
    res.send('Hola mundo en Express')
})

app.listen(4000, () => {
    console.log('Servidor Funcionando....');
})