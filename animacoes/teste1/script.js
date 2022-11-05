const caixa1 = document.getElementById('caixa1')

function mover(){
    if(caixa1.classList.contains('balanca')){
        caixa1.classList.remove('balanca')
    }
    else{
        caixa1.classList.add('balanca')
    }
}