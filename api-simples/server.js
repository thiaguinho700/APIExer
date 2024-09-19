const express = require("express")

const app = express()

const porta = 3000

const dados = []

app.use(express.json())


app.post(`/data`, (req, res) =>{
    const {nome,idade} = req.body
    res.send(`Nome ${nome} idade ${idade}`)
    dados.push({nome,idade})
    // res.send("Api funcionando")
})

app.get(`/data`, (req, res) =>{
    const {nome,idade} = req.body
    // res.send(`Nome ${nome} idade ${idade}`)
    res.json(dados)
    // res.send("Api funcionando")
})

app.listen(porta, () =>{
    console.log("API 100% ");
    
})