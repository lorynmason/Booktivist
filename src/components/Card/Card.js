import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class Card extends Component { 
  
  handleClick = () => {
    if (!this.props.isFavorite) {
      this.props.addBookList(this.props.result)
    } else {
      this.props.removeBookList(this.props.result)
    }
  }
  
  findSimilar = () => {
    this.props.sendSearch(this.props.result.Name)
  }

  render() {
    let bookmark = "far fa-bookmark"
    const { isFavorite } = this.props
    let page;
    if (this.props.loc === '/MustReadList' && this.props.message === 'Found Similar Books!') {
      page = <Redirect to ='/SearchResults' />
    }
    if (isFavorite) {
      bookmark = "fas fa-bookmark"
    }
    return (
    <div className="card" key={this.props.result.Name}>
      {page}
      <button><i className={bookmark} id='bookmark' onClick={this.handleClick}></i></button>
      <button className="search-btn"><i className="fas fa-search" id='search' onClick={this.findSimilar}></i></button>
      <h1>{this.props.result.Name}</h1>
      <p>{this.props.result.wTeaser}</p>
    </div>
    )
  } 
}

export default Card
