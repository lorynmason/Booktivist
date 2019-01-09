import React from 'react'

export const Page404 = ({ location }) => {
  if(location.pathname === '/') {
    return (<div></div>)
  }
  return (
  <main>
    <h2>404 page not found</h2>
  </main>
  )
}