const express = require('express')

//app de express
const app = express()
//puerto para ver app
const port = 3000

//path inicial
app.get('/', (req,res) =>{
    res.send('Hola mundo :)')
})

//nueva ruta
app.get('/launchx', (req,res) =>{
    res.send('Mensaje para Launch X')
})

//con esto se inicializa app
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})