import React from 'react'

const LanguageLink = ({name}) => {
  return (
    <div>
        <a style={{textDecoration: "none", fontWeight: "600", color: "blue"}} href="./Language.jsx">{name}</a>
    </div>
  )
}

export default LanguageLink;