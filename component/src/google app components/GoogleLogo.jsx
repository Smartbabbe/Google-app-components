import React from 'react';
import "./GoogleLogo.css"
import googleLogo from "../Images/google_logo.png"

const GoogleLogo = () => {
  return (
    <div>
      <img className='googlelogo' src={googleLogo} alt='google logo' />
    </div>
  )
}

export default GoogleLogo;