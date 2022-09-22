import { useContext } from "react"
import { Contexto } from "../App/App"


const ContextButton = () => {

  const { people, setHello, hello } = useContext(Contexto)

  return(
  <>
    <button onClick={ () => {setHello(!hello)} }>Traduzir</button>
    <h1>{people.name}</h1>
  </>
  )
}

export default ContextButton