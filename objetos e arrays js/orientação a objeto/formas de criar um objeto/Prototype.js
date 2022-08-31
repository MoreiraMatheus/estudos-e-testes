//Prototype
function Microfone(defaultColor="black"){
  this.color = defaultColor
  this.isOn = true
}
Microfone.prototype.toggleOnOff = function(){
  if(this.isOn){
    console.log('desligando')
  }
  else{
    console.log('ligando')
  }
  this.isOn = !this.isOn
}

const microfone = new Microfone() // forma de criação
console.log(microfone)