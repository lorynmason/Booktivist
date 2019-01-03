import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className="title-search">
        <h1>Booktivist</h1>
        <h3>Read up, so you can Speak up</h3>
        <input placeholder="Search for author or book"></input>
      </div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/2000px-Fist.svg.png' alt='activist fist'/>
      {/* <img src='../../styles/images/2000px-Fist.svg.png'/> */}
    </header>
  )
}