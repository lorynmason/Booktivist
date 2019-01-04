import React from 'react';
import { connect } from 'react-redux';

export const CardContainer = ({ books }) => {
  const cards = books.map( book => {
    return <p>{book.Name}</p>
  })

  return (
    <main>
      <div className="top-card-container">
        <div className="top-card">
          <h1></h1>
          <p></p>
        </div>
      </div>
      <div className="card-container">
        {cards}
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  books: state.books
});

export const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);