import React from "react";
import "./App.css"
import Button from "./components/button";
import HelloWorld from "./components/HelloWorld";
import FalaNumeros from "./components/FalaNumeros";
import Lista from "./components/Lista";
import Formulario from "./components/Form";

const App = () =>{
  const NOME = 'Matheus'
  const FOTO = 'https://blog.cobasi.com.br/wp-content/uploads/2020/10/passaros-para-ter-em-casa-capa.png'
  return(
    <>
      {/* <h1>Hello world</h1>
      <p>esse é meu primeiro site usando React</p>
      <p>feito por: {NOME}</p>
      <p>uma imagem fofa pra você ver:</p>
      <img src={FOTO} alt="foto-fofa"/>
      <br/>
      <Button></Button>
      <HelloWorld/>
      <FalaNumeros frase="o valor que me passaram foi:" numero="1"/>
      <FalaNumeros frase="me passaram tambem esse valor" numero="2"/>
      <FalaNumeros frase="e por fim me passaram esse" numero="3"/>
      <Lista></Lista> */}
      {/* <Formulario></Formulario>
      <br/> */}
      <p>olá</p>
      <Button>trocar texto</Button>
    </>
  )
}

export default App