async function pegaDados(){
  const pessoas = await fetch('pessoas.json')
  const pessoasJson = await pessoas.json()
  console.log(pessoasJson)
}

pegaDados()