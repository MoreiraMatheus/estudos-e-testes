import { useContext } from "react"
import { Contexto } from "../App/App"


const ContextButton = () => {

  const { people, olaMundo } = useContext(Contexto)

  return(
  <>
    <button onClick={olaMundo}>Click</button>
    <h1>{people.name}</h1>
  </>
  )
}

export default ContextButton