import React from "react";

import './button.css'

const Button = ({ children }) =>{
    function meuClick(){
        window.alert('me clicaram')
    }

    return(
        <button className="bt" onClick={meuClick}>{children}</button>
    )
}

export default Button