fetch('pessoas.json')
  .then(response => response.json())
  .then(response => console.log(response))
