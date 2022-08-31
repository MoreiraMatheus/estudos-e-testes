//Factory
function createMicrofone(defaultColor="black"){
  let isOn = true //não será retornado
  const toggleOnOff = function(){
      if(isOn){
        console.log('desligando')
      }
      else{
        console.log('ligando')
      }
      isOn = !isOn
  }
  
  return{color: defaultColor, toggleOnOff}
}

const microfone = createMicrofone() // forma de criação