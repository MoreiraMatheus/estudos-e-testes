const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

async function pegaDados(id=1){
    try {
        const RESPONSE = await fetch(BASE_URL + id + '/')
        const DATA = await RESPONSE.json()
        const NOME_POKE = DATA.name
        console.log(NOME_POKE)
        // return NOME_POKE
    } catch (error) {
        console.log('opa tivemos um erro com a API')
        console.log(error)
    }
}

function atualizaP(texto){
    const paragrafo = document.querySelector('p')
    paragrafo.innerText = texto
}

pegaDados()