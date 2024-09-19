const express = require("express")

const app = express()

const port = 3100

const produtosList = []

const userList = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bem-Vindo a API 1.0 - Senai Market")
})

app.post("/produtos", (req, res) => {
    const {nomeProd, qtde, valor}= req.body
    res.send("Dados cadastrados com sucesso!")
    produtosList.push({nomeProd,qtde,valor})
})

app.get("/produtos", (req, res) => {
    res.json(produtosList)
})

app.get("/clientes", (req,res) =>{
    res.send(userList)
})
app.post("/clientes", (req,res) =>{
    const {login, senha} = req.body
    res.send("Cliente cadastrado com sucesso!")
    userList.push({login,senha})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);

})