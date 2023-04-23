import React from 'react';
import leaf from "../Images/leaf.png"


function FooterTText() {
  return (
    <div>
      <div style={{display: "flex", alignItems: "center", gap: "4px", margin: "0 10px"}}>
        <img style={{background: "transparent"}} src={leaf} alt="leaf icon" height="20rem" />
        <p>Carbon neutral since 2007</p>
      </div>
    </div>
  )
}

export default FooterTText;