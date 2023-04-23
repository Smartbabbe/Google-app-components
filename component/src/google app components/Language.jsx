import React from 'react';
import LanguageLink from './LanguageLink.jsx';

function Language() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
      <p style={{marginRight: "1rem"}} >Google offered in:</p>
      <div style={{display: "flex", gap: "0.4rem", textDecoration: "none"}} >
        <LanguageLink name = {"Hausa"} />
        <LanguageLink name = {"Igbo"} />
        <LanguageLink name = {"Ede Yoruba"} />
        <LanguageLink name = {"Nigerian Pidgin"} />
      </div>
    </div>
  )
}

export default Language;