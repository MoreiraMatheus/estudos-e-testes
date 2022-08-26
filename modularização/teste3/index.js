import { nullishCoalescingOperator } from './imports/explicacao1.js'
import { esModules, esModules2 } from './imports/explicacao2.js'
import githubVScode from './imports/explicacao3.js'

document.body.innerHTML += '<h1>Realizando testes com:</h1>'

const estudo = null
document.body.innerHTML +=`
<ul>
    <li> Nullish coalescing ${estudo ?? 'operator'}
    <p>${nullishCoalescingOperator}</p>

    <li> ES modules
    <p>${esModules}</p>
    <p>${esModules2}</p>

    <li> Funções do GitHub dentro do VS code
    <p>${githubVScode}</p>
</ul>`