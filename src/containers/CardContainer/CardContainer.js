import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import Message from '../Message/Message';
import { addMessage } from '../../actions';
import { addBookList } from '../../thunks/addBookList';
import { removeBookList } from '../../thunks/removeBookList';
import { fetchBooks } from '../../thunks/fetchBooks';

export const CardContainer = ({ results, info, location, addBookList, removeBookList, bookList, sendSearch}) => {

  let infoCard = <Card result={info} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} sendSearch={sendSearch}/>

  let cards = results.map(result => {
    return <Card result={result} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} sendSearch={sendSearch}/>
  })

  let page;

  if (location.pathname === '/SearchResults' && !results.length) {
    infoCard = <h3> Sorry We didn't find anything</h3>
  }

  if (location.pathname === '/MustReadList') {
    if (bookList.length) {
      cards = bookList.map(result => {
        return <Card result={result} addBookList={addBookList} removeBookList={removeBookList} bookList={bookList} sendSearch={sendSearch}/>
      })
    } else {
      cards = <h3>There are no Books on Your Reading List</h3>
    }
    return (
      <main>
        <Message />
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
      {page}
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
  removeBookList: book => dispatch(removeBookList(book)),
  sendSearch: search => dispatch(fetchBooks(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);