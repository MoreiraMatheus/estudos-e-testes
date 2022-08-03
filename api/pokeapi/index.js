const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

async function pegaDados(id=1){
    try {
        const RESPONSE = await fetch(BASE_URL + id + '/')
        const DATA = await RESPONSE.json()
        return DATA
    } catch (error) {
        console.log('opa tivemos um erro com a API')
        console.log(error)
    }
}

function atualizaP(texto){
    const paragrafo = document.querySelector('p')
    paragrafo.innerText = texto
}

pegaDados().then(res => {console.log(res.name)})
pegaDados().then(res => {console.log(res.id)})