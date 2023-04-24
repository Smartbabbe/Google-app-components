import React from 'react'
import "./searchBar.css"
import voice from "../Images/voice.png"
import image from "../Images/add_image.png"
import search from "../Images/searchlogo.png"
import { useState } from 'react'

function SearchBar() {
  const [initial, after] = useState("");
  return (
    <div>
      <div className='divv'>
        <div className='searchBar'>
          <img className='search' src={search} alt='search icon' />
          <input type='text' value={initial} onChange={(e) => {after(e.target.value)}}  name='searchBar' className='searchTextBar' />
          <img className='voice' src={voice} alt="voice icon" />
          <img className='imgss' src={image} alt="file icon" />
        </div>
        <div>
        <p>{initial}</p>
        </div>        
      </div>

    </div>
  )
}

export default SearchBar;