import { createContext, useState } from "react"
import ContextButton from "../ContextButton"

export const Contexto = createContext()

const App = () => {
    const people = {name: 'Maths', job: 'dev', sayHello: () => {alert('hello')}}

    const [hello, setHello] = useState(true)

    return(
    <>
        <h1>{hello ? 'Hello world' : 'Olá Mundo'}</h1>
        <Contexto.Provider value={{people, hello, setHello}}>
            <ContextButton/>
        </Contexto.Provider>
    </>
    )
}

export default App