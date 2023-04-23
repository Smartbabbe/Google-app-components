import React from 'react'
import "./Button.css"

function Button({text}) {
  return (
    <div>
      <button><a className='but' href= "./Button.jsx" >{text}</a> </button>
    </div>
  )
}

export default Button;