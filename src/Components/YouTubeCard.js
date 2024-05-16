import React from 'react'

function YouTubeCard({imgLink, altText, title, paraText}) {
  return (
    <article style={{ borderRadius: "20px"}}>
    <img 
      src={imgLink} alt={altText} 
    />
    <h6>
      {title}
    </h6>
    <p>{paraText}</p>
  </article>
  )
}

export default YouTubeCard