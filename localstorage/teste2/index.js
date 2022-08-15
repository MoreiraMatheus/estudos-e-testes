const Tittle = document.querySelector('h1')
const Input = document.getElementById('idtextinput')
const Button = document.querySelector('button')

Button.addEventListener('click', () => {
    const valorDigitado = Input.value
    localStorage.setItem('programador', valorDigitado == '' ? "Fulano" : valorDigitado)
})

let ValorLocal = localStorage.getItem("programador")
Tittle.innerText += ValorLocal == null ? '' : ValorLocal