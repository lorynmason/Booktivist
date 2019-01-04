import React from 'react';

export const Card = ({ result }) => {
  return (
    <div>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
  )
}