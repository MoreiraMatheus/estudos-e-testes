const caixa1 = document.getElementById('caixa1')

function mover(){
    if(caixa1.classList.contains('move-direita')){
        caixa1.classList.remove('move-direita')
        caixa1.classList.add('move-esquerda')
    }
    else{
        caixa1.classList.remove('move-esquerda')
        caixa1.classList.add('move-direita')
    }
}