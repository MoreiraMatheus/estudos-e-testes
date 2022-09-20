import { createContext } from "react"
import ContextButton from "../ContextButton"

export const Contexto = createContext()

const people = {name: 'Maths', job: 'dev', sayHello: () => {console.log('hello')}}

function helloWorld(){
    console.log('hello world')
}

const App = () => {
    return(
    <>
        <h1>Hello world</h1>
        <Contexto.Provider value={{people,  olaMundo : helloWorld }}>
            <ContextButton/>
        </Contexto.Provider>
    </>
    )
}

export default App