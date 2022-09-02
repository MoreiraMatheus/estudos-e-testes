let frutas = ['🍎', '🍌', '🍉', '🍓']
let numeros = [1, 2, 3, 4, 5, 6, 7]
console.log('\n====Testes com Arrays====')

frutas = [...frutas, '🍐', '🍇']
console.log(frutas.map(fruta => {
  return `hmmm frutinha ${fruta}`
}))