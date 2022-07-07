class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    nome
    idade
    sexo
    comprimentar(){
        console.log(`Prazer me chamo ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('joana', 20, 'F')
pessoa1.comprimentar()
console.log(typeof(pessoa1))