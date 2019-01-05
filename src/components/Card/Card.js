import React from 'react';

export const Card = ({ result, isFavorite }) => {
  const handleClick = () => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(!isFavorite) {
      if(oldbookList) {
        const updatedList = [...oldbookList, result]
        localStorage.setItem('bookList', JSON.stringify(updatedList))
      } else {
        localStorage.setItem('bookList', JSON.stringify([result]))
      }
    } else {
      const updatedList = oldbookList.filter(book => book.Name !== result.Name)
      localStorage.setItem('bookList', JSON.stringify(updatedList))
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