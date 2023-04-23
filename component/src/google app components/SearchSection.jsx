import React from 'react';
import "./SearchSection.css";
import Button from "./Button.jsx"
import GoogleLogo from './GoogleLogo'
import SearchBar from './SearchBar';
import Language from './Language';

const SearchSection = () => {
  return (
    <div className='searchsection'>
        <GoogleLogo />
        <SearchBar />
        <div style={{display: "flex"}}>
          <Button text= "Google Search" />
          <Button text= "I'm feeling lucky" />
        </div>
        <Language />
    </div>
  )
}

export default SearchSection;