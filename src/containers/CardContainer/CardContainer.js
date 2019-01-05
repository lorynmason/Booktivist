import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'
import { addBookList } from '../../actions'

export const CardContainer = ({ results, info, addBookList, location, bookList }) => {
  const handleClick = () => {
    const oldbookList = JSON.parse(localStorage.getItem('bookList'))
    if(oldbookList) {
      const updatedList = [...oldbookList, info]
      console.log(updatedList)
      localStorage.setItem('bookList', JSON.stringify(updatedList))
    } else {
      localStorage.setItem('bookList', JSON.stringify([info]))
    }
  }
  let cards = results.map(result => {
    return <Card result={result} addBookList={addBookList}/>
  })
  if (location.pathname === '/MustReadList') {
    const list = JSON.parse(localStorage.getItem('bookList'))
    cards = list.map(result => {
      return <Card result={result} addBookList={addBookList}/>
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
  bookList: state.bookList
});

export const mapDispatchToProps = dispatch => ({
  addBookList: book => dispatch(addBookList(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);