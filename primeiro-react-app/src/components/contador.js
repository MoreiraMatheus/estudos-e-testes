import React from "react";

const Contador = () => {
    const [contador, atualizaCont] = React.useState(0)

    function aumentar(){
        let novoValor = contador
        novoValor ++
        if(!validaValor(novoValor)){
            atualizaCont(novoValor)
        }
    }
    function diminuir(){
        let novoValor = contador
        novoValor --
        if(!validaValor(novoValor)){
            atualizaCont(novoValor)
        }
    }
    function validaValor(valor){
        if(valor > 10 || valor < -10){
            window.alert('valor limite')
            return true
        }
        return false
    }

    return(
        <>
            <h1>Valor atual: {contador}</h1> 
            <div>
                <button onClick={diminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>
        </>
    )
}

export default Contador