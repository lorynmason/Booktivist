import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import Message from '../Message/Message';
import { addMessage } from '../../actions';

export const CardContainer = ({ results, info, location}) => {
  
  const handleClick = () => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(oldbookList) {
      const updatedList = [...oldbookList, info]
      localStorage.setItem('bookList', JSON.stringify(updatedList))
    } else {
      localStorage.setItem('bookList', JSON.stringify([info]))
    }
  }

  let cards = results.map(result => {
    let isFavorite = false;
    const bookList = JSON.parse(localStorage.getItem('bookList'))
    bookList.forEach(book => {
      if (book.Name === result.Name) {
        isFavorite = true;
      }
    });
    return <Card result={result} isFavorite={isFavorite}/>
  })

  if (location.pathname === '/MustReadList') {
    const list = JSON.parse(localStorage.getItem('bookList'))
    cards = list.map(result => {
      return <Card result={result} isFavorite={true}/>
    })
    return (
      <main>
        <h2>Must Read List</h2>
        <div className="card-container">
          {cards}
        </div>
      </main>
    )
  }
  return (
    <main>
      <Message />
      <div className="top-card-container">
        <div className="top-card">
        <button><i className="far fa-star" onClick={handleClick}></i></button>
          <h1>{info.Name}</h1>
          <p>{info.wTeaser}</p>
        </div>
      </div>
      <h2>Recomendations</h2>
      <div className="card-container">
        {cards}
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  results: state.results,
  info: state.info,
  message: state.message
});

export const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);