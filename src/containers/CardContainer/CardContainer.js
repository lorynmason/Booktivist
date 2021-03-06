import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import Message from '../Message/Message';
import { addMessage } from '../../actions';
import { addBookList } from '../../helpers/addBookList';
import { removeBookList } from '../../helpers/removeBookList';
import { fetchBooks } from '../../thunks/fetchBooks';
import { Loader } from '../../components/Loader/Loader';
import { getBookList } from '../../helpers/getBookList';
import PropTypes from 'prop-types';

export const CardContainer = ({ results, info, location, addBookList, removeBookList, bookList, sendSearch, isLoading, message, getBookList, addMessage }) => {
  const loc = location.pathname
  let isFavorite = false

  const makeCards = (data, fav) => {
    return <Card result={data} key={data.Name} addBookList={addBookList} removeBookList={removeBookList} sendSearch={sendSearch} getBookList={getBookList} message={message} addMessage={addMessage} loc={loc} isFavorite={fav}/>
  }
  
  let infoCard = makeCards(info, isFavorite)
  
  if(bookList) {
    bookList.forEach(item => {
      if (item.Name === info.Name) {
        isFavorite = true     
      }
      infoCard = makeCards(info, isFavorite)
    })
  } 
  
  let cards = results.map(result => {
    let isFavorite = false
      bookList.forEach(item => {
        if (item.Name === result.Name) {
          isFavorite = true      
        }
      })
    return makeCards(result, isFavorite)
  })

  if (isLoading) {
    return <Loader />
  }

  if (location.pathname === '/SearchResults' && !isLoading && !results.length) {
    return <h2 className='sorry'>Sorry didn't find anything</h2>
  }

  if (loc === '/MustReadList') {
    if (bookList.length) {
      cards = bookList.map(result => {
        return makeCards(result, true)
      })
    } else {
      cards = <h3>There are no Books on Your Must Read List</h3>
    }
    return (
      <main>
        <Message />
        <h2 className="must-read">Must Read List</h2>
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
      <h2>Recommendations</h2>
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
  bookList: state.bookList,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  addBookList: book => dispatch(addBookList(book)),
  removeBookList: book => dispatch(removeBookList(book)),
  sendSearch: search => dispatch(fetchBooks(search)),
  getBookList: () => dispatch(getBookList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);

CardContainer.propTypes = {
  removeBookList: PropTypes.func.isRequired,
  addBookList: PropTypes.func.isRequired, 
  sendSearch: PropTypes.func.isRequired,
  getBookList: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  bookList: PropTypes.array.isRequired,
};
