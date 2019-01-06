import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import Message from '../Message/Message';
import { addMessage } from '../../actions';
import { addBookList } from '../../thunks/addBookList';
import { removeBookList } from '../../thunks/removeBookList';

export const CardContainer = ({ results, info, location, addBookList, removeBookList, bookList}) => {

  let infoCard = <Card result={info} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} />

  let cards = results.map(result => {
    return <Card result={result} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} />
  })

  if (location.pathname === '/MustReadList') {
    cards = bookList.map(result => {
      return <Card result={result} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} />
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
        {infoCard}
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
  message: state.message,
  bookList: state.bookList
});

export const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  addBookList: book => dispatch(addBookList(book)),
  removeBookList: book => dispatch(removeBookList(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);