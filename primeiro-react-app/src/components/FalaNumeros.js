import './FalaNumeros.css'

function FalaNumeros({frase, numero}){
    return(
        <div>
            <p className="paragrafo">{frase} {numero}</p>
        </div>
    )
}
export default FalaNumeros