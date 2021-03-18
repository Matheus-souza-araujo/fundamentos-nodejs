//importando o express
const { request } = require('express');
const express = require('express')
// atribuindo ao app o express
const app = express();

//para podermos recebermos JSON
app.use(express.json());

//rota get pegando dados dessa rota
app.get('/courses', (req, res)=> {
    const query = req.query
    console.log(query)
   return res.json(["Curso 1", "Curso 2","Curso 3"]);
})

// rota post criando novos dados
app.post('/courses', (req, res) =>{
    const body = req.body
    console.log(body)
    return res.json(["Curso 1", "Curso 2","Curso 3"]);
})

//rota put alterando nossos dados existentes
app.put('/courses/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    return res.json(["Curso 6", "Curso 2","Curso 3"]);
})

//rota patch alterando apenas um dos nossos dados
app.patch('/courses/:id', (req, res) => {
    return res.json(["Curso 6", "Curso 2","Curso 3"]);
})
//rota para deletar um curso
app.delete('/courses/:id', (req, res) =>{
    return res.json(["Curso 3"]);
})

//configurações do servidor
app.listen(3000, () =>{
    console.log("Server is running")
})