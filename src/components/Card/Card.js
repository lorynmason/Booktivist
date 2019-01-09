import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class Card extends Component { 
  handleClick = () => {
    const { isFavorite, result, addBookList, removeBookList } = this.props
    if (!isFavorite) {
      addBookList(result)
    } else {
      removeBookList(this.props.result)
    }
  }
  
  findSimilar = () => {
    this.props.sendSearch(this.props.result.Name)
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
      <button><i className={bookmark} id='bookmark' onClick={this.handleClick}></i></button>
      <button className="search-btn"><i className="fas fa-search" id='search' onClick={this.findSimilar}></i></button>
      <h1>{result.Name}</h1>
      <p>{result.wTeaser}</p>
    </div>
    )
  } 
}

export default Card
