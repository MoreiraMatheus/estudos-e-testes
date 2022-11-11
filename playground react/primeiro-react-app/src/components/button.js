import React from "react";

import './button.css'

const Button = ({ children, func}) =>{
    return(
        <button className="bt" onClick={func}>{children}</button>
    )
}

export default Button