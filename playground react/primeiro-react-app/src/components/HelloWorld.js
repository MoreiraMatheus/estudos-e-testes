import Frase from "./Frase";

function HelloWorld(){
    return(
        <div>
            <h1>este componente foi importado de outro arquivo.</h1>
            <Frase/>
            <Frase/>
            <Frase/>
        </div>
    )
}

export default HelloWorld