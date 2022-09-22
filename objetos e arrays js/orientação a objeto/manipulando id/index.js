const users = [
  {nome: 'Matheus', idade: 19},
  {nome: 'Daniel', idade: 20, id: 4},
  {nome: 'Carlos', idade: 18},
]

function updateId(objectList){
  const newArray = []
  for (let i = 0; i < objectList.length; i++) {
    objectList[i].id = i + 1
    newArray.push(objectList[i])
  }
  return newArray
}

console.table(users)

console.table(updateId(users))