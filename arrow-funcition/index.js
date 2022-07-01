//função comum:
// function some(numero1, numero2){
//     return numero1 + numero2
// }
//mesma função mas usando arrow function
const soma = (numero1, numero2) =>{
    return numero1 + numero2
}
console.log(soma(2, 3))

//não é necessário utilizar o return, para isso tambem devemos tirar as chaves
const somar = (num1, num2) => num1 + num2
console.log(somar(1, 6))

//lembrando que não é necessário passar parâmetros para uma arrow function como no exemplo a seguir:
const site = () =>{
    return 'jw.org'
}
console.log(site())

//podemos tambem passar apenas um parâmetro para uma rrow function, isso é interessante porque nesses casos não são necessários os parênteses
const dobrar = num => num*2
console.log(dobrar(2))

// retornando um objeto com arrow function:
const pessoa = () =>{
    return {nome: 'Matheus', idade: 19, profissão: 'estudante'}
}
console.log(pessoa().nome)

let tchau = 'tchau'
tchau = 'tchau'
tchau = 'tchau'
tchau = 'tchau'
tchau = 'tchau'
tchau = 'tchau'
tchau = 'tchau'