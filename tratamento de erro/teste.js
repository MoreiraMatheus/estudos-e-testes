//bloco de código com potencial de gerar um erro
try {
  throw new Error('nada para mostrar aqui')
}
//bloco de código que será rodado caso o bloco anterior gere um erro
catch (error) {
  console.log('erro encontrado:\n', error.message)
}
//bloco de código que será excecutado independe se houver erro ou não
finally{
  console.log('essa mensagem sempre será exibida :)')
}