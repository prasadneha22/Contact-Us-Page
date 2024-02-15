import React from 'react'
import './Button.css'

function Button({isOutline,icon,text}) {
 
  return (

    <button className={isOutline ? "outline-btn" : "primary-btn"}>
    {icon}
    {text}
</button>

  )
}

export default Button