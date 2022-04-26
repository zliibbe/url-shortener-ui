import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
    console.log("props.urls type: ", props.urls);
  if(!props.urls) {
    console.log("error with props")
    return
  }

  const urlEls = props.urls.map(url => {
    return (
      <div  key={url.id} className="url">
        <h3>{url.title}</h3>
        
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
