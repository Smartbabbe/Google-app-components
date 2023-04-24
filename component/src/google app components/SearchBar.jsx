import React from 'react'
import "./searchBar.css"
import voice from "../Images/voice.png"
import image from "../Images/add_image.png"
import search from "../Images/searchlogo.png"
import { useState } from 'react'

function SearchBar() {
  const [initial, setAfter] = useState("");
  
  const arrs = [];
  
  const submitHandle = (event) => {
    event.preventDefault();
    arrs.push(event.target[0].value)
    console.log(arrs)
    setAfter(arrs)
  }

  const newArrs = [...arrs, ] 

  
  return (
    <div>
      <form onSubmit={submitHandle} className='divv'>
        <div className='searchBar'>
          <img className='search' src={search} alt='search icon' />
          <input type='text' name='searchBar' className='searchTextBar' />
          <img className='voice' src={voice} alt="voice icon" />
          <img className='imgss' src={image} alt="file icon" />
        </div>
        <div>
        <p style={{display: "flex", justifyContent: "center"}}>{initial}</p>
        </div>        
      </form>

    </div>
  )
}

export default SearchBar;