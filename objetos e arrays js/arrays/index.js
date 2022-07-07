const arr = [11, 12, 30]

if(arr.some(num => num > 10)){//.some passou por todos o numeros em cada um deles alterando o valor de num enquanto a arrow function testava se eram maiores que 10
    console.log('nesse array existem numeros maiores que 10')
}
else{
    console.log('nesse array todos os numeros são menores que 10')
}

if(arr.every(num => num > 10)){// every faz o mesmo papel do some, porem ele só retorna true se TODOS os valores atenderem as condições
    console.log('todos os numeros são maiores que 10')
}
