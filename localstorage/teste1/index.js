const raiz = document.getElementById('root')

const myObject = {'nome': "Matheus", "idade": 19}
const myObjectJson = JSON.stringify(myObject)

localStorage.setItem("pessoa", myObjectJson)

const obj = JSON.parse(localStorage.getItem("Pessoa"))
console.log(obj)

raiz.innerHTML = `<h1>${obj.nome}</h1>`