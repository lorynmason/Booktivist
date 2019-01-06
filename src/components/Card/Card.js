import React from 'react';

export const Card = ({ result, isFavorite, addBookList, removeBookList }) => {
  const handleClick = () => {
    if(!isFavorite) {
      addBookList(result)
     } else {
      removeBookList(result)
     }
  }
  let star = 'far fa-star'
  if (isFavorite) {
    star = 'fas fa-star'
  }
  return (
    <div className="card" key={result.Name}>
      <button><i className={star} onClick={handleClick}></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
  )
}