import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class Card extends Component { 
  handleClick = () => {
    const { isFavorite, result, addBookList, removeBookList } = this.props
    if (!isFavorite) {
      addBookList(result)
    } else {
      removeBookList(result)
    }
  }
  
  findSimilar = () => {
    const {sendSearch, result } = this.props
    sendSearch(result.Name)
  }

  render() {
    let bookmark = "far fa-bookmark"
    const { isFavorite, loc, message, result } = this.props
    let page;
    if (loc === '/MustReadList' && message === 'Found Similar Books!') {
      page = <Redirect to ='/SearchResults' />
    }
    if (isFavorite) {
      bookmark = "fas fa-bookmark"
    }
    return (
    <div className="card" key={result.Name}>
      {page}
      <button><i title="Must Read List" className={bookmark} id='bookmark' onClick={this.handleClick}></i></button>
      <button title="Find Similar" className="search-btn"><i className="fas fa-search" id='search' onClick={this.findSimilar}></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
    )
  } 
}

export default Card
