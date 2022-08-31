//Class
class Microfone{
  constructor(color="black"){
    this.color = color;
    this.isOn = true;
  }
  toggleOnOff(){
    if(this.isOn){
      console.log('desligando')
    }
    else{
      console.log('ligando')
    }
    this.isOn = !this.isOn
  }
}

const microfone = new Microfone() // forma de criação