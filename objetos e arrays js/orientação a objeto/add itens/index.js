const adicionar = document.getElementById('adicionar')
const excluir = document.getElementById('excluir')

class Produto{
    constructor(){
        let id = 1
    }

    adicionar(){
        console.log('Produto adicionado')
    }
    
    excluir(){
        console.log('Produto excluido')
    }
}
let produto = new Produto()

adicionar.addEventListener('click', () => {
    produto.adicionar()
})

excluir.addEventListener('click', () => {
    produto.excluir()
})

