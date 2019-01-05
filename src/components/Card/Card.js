import React from 'react';

export const Card = ({ result, addBookList }) => {
  return (
    <div className="card" key={result.Name}>
      <button><i className="far fa-star" onClick={()=>addBookList(result)}></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
  )
}