const myPromisse = new Promise((resolve, reject) => {
  const num = 5
  // resolve(`numero informado: ${num}`)
  reject('ops, algo deu errado')
})

myPromisse
  .then(msg => console.log(msg))
  .catch(msg => console.log(msg))