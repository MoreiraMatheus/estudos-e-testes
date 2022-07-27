import Item from "./ItemLista"

function Lista(){
    return(
        <>
            <h1>Lista de itens</h1>
            <Item nome="manoel" idade={18}></Item>
            <Item nome='maria' idade={1}></Item>
        </>
    )
}

export default Lista