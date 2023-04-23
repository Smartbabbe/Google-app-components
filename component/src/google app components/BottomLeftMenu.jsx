import React from 'react'
import MenuItem from './MenuItem';

function BottomLeftMenu() {
  return (
    <div>
      <div style={{display: "flex", gap: "2rem", margin: "0 10px"}}>
        <MenuItem title= {"About"} />
        <MenuItem title= {"Advertising"} />
        <MenuItem title= {"Business"} />
        <MenuItem title= {"How search works"} />
      </div>
    </div>
  )
}

export default BottomLeftMenu;