import React from 'react';

export const Card = ({ result, addBookList }) => {
  const handleClick = () => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(oldbookList) {
      const updatedList = [...oldbookList, result]
      console.log(updatedList)
      localStorage.setItem('bookList', JSON.stringify(updatedList))
    } else {
      localStorage.setItem('bookList', JSON.stringify([result]))
    }
  }
  return (
    <div className="card" key={result.Name}>
      <button><i className="far fa-star" onClick={handleClick}></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
  )
}