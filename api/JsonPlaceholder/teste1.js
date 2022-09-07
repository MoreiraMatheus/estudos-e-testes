const baseUrl = 'https://jsonplaceholder.typicode.com/'

async function buscaPosts(){
  const posts = await fetch(baseUrl + 'posts')
  const postsTratados = await posts.json()
  return postsTratados
}

function createPost(titulo, conteudo, idUsuario){
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  const span = document.createElement('span')

  h1.innerText = titulo
  p.innerText = conteudo
  span.innerText = 'ID Usuário: '+ idUsuario

  div.appendChild(h1)
  div.appendChild(p)
  div.appendChild(span)

  return div
}

buscaPosts()
  .then(response => {
    for(let i = 0; i < response.length; i++){
      const post = response[i]
      document.body.appendChild(createPost(post.title, post.body, post.userId))
    }
  })