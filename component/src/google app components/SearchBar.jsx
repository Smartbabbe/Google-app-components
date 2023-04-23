import React from 'react'
import "./searchBar.css"
import voice from "../Images/voice.png"
import image from "../Images/add_image.png"
import search from "../Images/searchlogo.png"

function SearchBar() {
  return (
    <div>
      <div className='searchBar'>
        <img className='search' src={search} alt='search icon' />
        <input type='text' name='searchBar' className='searchTextBar' />
        <img className='voice' src={voice} alt="voice icon" />
        <img className='imgss' src={image} alt="file icon" />
      </div>
    </div>
  )
}

export default SearchBar;