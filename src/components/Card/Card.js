import React from 'react';

export const Card = ({ result }) => {
  return (
    <div className="card">
      <button><i className="far fa-star"></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
  )
}