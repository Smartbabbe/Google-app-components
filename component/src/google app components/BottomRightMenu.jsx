import React from 'react'
import MenuItem from './MenuItem'

function BottomRightMenu() {
  return (
    <div>
      <div style={{display: "flex", gap: "2rem", margin: "0 10px 10px 10px"}}>
        <MenuItem title = {"Privacy"} />
        <MenuItem title = {"Terms"} />
        <MenuItem title = {"Settings"} />
      </div>
    </div>
  )
}

export default BottomRightMenu