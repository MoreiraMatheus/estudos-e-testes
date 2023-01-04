const express = require("express");

const app = express();

app.use(express.json())

//realizar testes com esse código:
app.get("/test", (req, res)=>{
  res.send('formulário enviado')
  console.log(req.query)
  location.href = '/teste.html'
})

app.listen(4003, () => console.log("servidor rodando na porta 4003"));