const express = require("express");
const { randomUUID } = require("crypto");

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
// app.get("/test", (req, res)=>{
//   res.send('formulário enviado')
//   console.log(req.query)
// })

app.post('/products', (req, res)=>{
  const { name, price } = req.body

  const product = { 
    name,
    price,
    id: randomUUID()
  }

  products.push(product)

  return res.json(product)
})

//busca todos os produtos cadastrados
app.get('/products', (req, res)=>{
  return res.json(products)
})
//busca um produto por id informado
app.get('/products/:id', (req, res)=>{
  const { id } = req.params
  const product = products.find(product => product.id === id)
  return res.json(product)
})

app.put()

app.delete()

app.listen(4002, () => console.log("servidor rodando na porta 4002"));
