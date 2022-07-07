var data = new Date()
var add_mes = 2592000000 + data.getTime()
var daqui_1_mes = new Date(add_mes)
console.log(daqui_1_mes)

//milissegundos de um segundo: 1000
//milissegundos de um minuto:60000
//milissegundos de um hora: 3.600.000
//milissegundos de um dia: 86.400.000
//milisegundos de um mês: 2.592.000.000