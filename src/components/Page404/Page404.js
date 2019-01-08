import React from 'react'

export const Page404 = (props) => {
  if(props.location.pathname === '/') {
    return (<div></div>)
  }
  return (
  <main>
    <h2>404 page not found</h2>
  </main>
  )
}