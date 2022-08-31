//Object Literal
const microfone = {
    color: 'white',
    isOn: true,
    toggleOnOff: function(){
        if(microfone.isOn){
            console.log('desligando')
        }
        else{
            console.log('ligando')
        }
        microfone.isOn = !microfone.isOn
    }
}