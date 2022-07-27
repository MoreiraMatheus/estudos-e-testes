import React from "react";

import './button.css'

const Button = () =>{
    function meuClick(){
        window.alert('me clicaram')
    }

    return(
        <button className="bt" onClick={meuClick}>meu primeiro button</button>
    )
}

export default Button