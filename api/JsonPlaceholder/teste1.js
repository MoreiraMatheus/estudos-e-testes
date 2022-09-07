const baseUrl = 'https://jsonplaceholder.typicode.com/'

const titulo = document.getElementById('titulo')
const conteudo = document.getElementById('conteudo')
const user = document.getElementById('user')

async function buscaPosts(){
  const posts = await fetch(baseUrl + 'posts/1')
  const postsTratados = await posts.json()
  return postsTratados
}

buscaPosts()
  .then(({userId, title, body}) => {
    titulo.innerText = title
    conteudo.innerText = body
    user.innerText += userId
  })
