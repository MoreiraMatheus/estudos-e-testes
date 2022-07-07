var pessoa = {
    nome: 'fulano',
    idade: 18,
    sexo: 'M',

    comprimentar(){
        console.log(`Olá me chamo ${this.nome}`)
    }
}
pessoa.comprimentar()

//converte obj js em JSON
const pessoa_json = JSON.stringify(pessoa)
//console.log(pessoa_json)

//converte JSON em obj js
const pessoa_obj = JSON.parse(pessoa_json)
//console.log(pessoa_obj)