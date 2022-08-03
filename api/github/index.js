const BASE_URL = "https://api.github.com/users/"

const api = fetch(BASE_URL + "MoreiraMatheus")
.then(response => response.json())

api.then(dados => console.log(dados.login))