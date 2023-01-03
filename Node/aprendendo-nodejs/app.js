const express = require("express");

const app = express();

const products = []

app.use(express.json())

// formas de receber um dado de um formulário:
/*
  body -> pelo corpo da requisição http
  params -> app/param1/param2
  query -> dados passados pela url app/?name=nome&age=a00
*/

//realizar testes com esse código:
// app.get("/products", (req, res)=>{
//   res.send('formulário enviado')
//   console.log(req.query)
// })

app.post('/products', (req, res)=>{
  const body = req.body

  console.log(body)
})

app.listen(4002, () => console.log("servidor rodando na porta 4002"));
