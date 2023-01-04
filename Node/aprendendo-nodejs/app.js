const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs")

const app = express();

let products = []

fs.readFile('products.json', 'utf-8', (err, data)=>{
  if(err){
    console.log(err)
  }else{
    products = JSON.parse(data)
  }
})

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

  manipulateProductFile()

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

app.put('/products/:id', (req, res)=>{
  const { id } = req.params
  const { name, price } = req.body
  
  const productIndex = products.findIndex(product => product.id === id)
  products[productIndex] = {
    ...products[productIndex],
    name,
    price
  }

  manipulateProductFile()
  
  return res.json({message: 'produto alterado com sucesso!'})
})

app.delete('/products/:id', (req, res)=>{
  const { id } = req.params
  const productIndex = products.findIndex(product => product.id === id)
  
  products.splice(productIndex, 1)
  
  manipulateProductFile()
  
  return res.json({message: 'produto removido com sucesso!'})
})

function manipulateProductFile(){
  fs.writeFile("products.json", JSON.stringify(products), err =>{
    if(err){
      console.log(err)
    }else{
      console.log('produto inserido')
    }
  })  
}

app.listen(4002, () => console.log("servidor rodando na porta 4002"));
