import React from 'react'
import avatarImage from "../Images/avatar.png"

function Avatar() {
  return (
    <div>
        <img src={avatarImage} alt='avatar' style={{borderRadius: "50px", border: "2px solid grey",}} />
    </div>
  )
}

export default Avatar;