import { useState } from "react"

function Formulario(){
    const [nomeDigitado, setName] = useState()
    function mostrar(){
        window.alert(nomeDigitado)
    }

    return(
        <>
            <input type="text" placeholder="Digite um nome" id="nome" name="nome" onChange={e => setName(e.target.value)}></input>
            <button onClick={mostrar}>mostrar</button>
        </>
    )
}

export default Formulario