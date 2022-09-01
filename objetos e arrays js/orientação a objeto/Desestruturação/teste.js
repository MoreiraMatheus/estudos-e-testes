console.log('\n====Desestruturando Objetos====')

const meuObj = {
  nome: 'matheus',
  idade: 19,
  estuda: true,
  trabalha: false,
  hobbies: ['jogar lol', 'programar']
}
const { nome:programador, ...restinho } = meuObj
console.log(programador, '\n' , restinho)

console.log('\n====Desestruturando Arrays====')

const meuArr = ['Matheus', 19, 'programador']
const [nome, ...restoArray] = meuArr
console.log(nome, restoArray)

console.log('\n====Desestruturando Functions====')

const myFunc = ({nome, ...restFunc}) => {
  console.log(nome, restFunc)
}
myFunc(meuObj)

console.log('\n')