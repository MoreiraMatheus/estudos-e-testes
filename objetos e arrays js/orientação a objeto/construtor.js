class Pessoa{
    //podemos definir as variáveis sem valores, porem as mesmas serão undefined
    nome
    idade
    //metodo construtor
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new Pessoa('matheus', 18)
const pessoa2 = new Pessoa('Jorge', 19)

console.log(pessoa1)
console.log(pessoa2)