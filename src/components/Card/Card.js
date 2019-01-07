import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class Card extends Component { 
  constructor(){
    super()
    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
    this.checkBookList()
  }

  checkBookList = () => {
    this.props.getBookList()
    this.props.bookList.forEach(book => {
      if (book.Name === this.props.result.Name) {
        this.toggleFavorite()        
      }
    })
  }

  toggleFavorite = () => {
    const { isFavorite } = this.state
    this.setState({isFavorite: !isFavorite})
  }

  handleClick = () => {
    const { isFavorite } = this.state
    if(!isFavorite) {
      this.props.addBookList(this.props.result)
     } else {
      this.props.removeBookList(this.props.result)
     }
    this.toggleFavorite()
  }

  findSimilar = () => {
    this.props.sendSearch(this.props.result.Name)
    this.checkBookList()
  }

  render() {
    let bookmark = "far fa-bookmark"
    const { isFavorite } = this.state
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
      <button><i className={bookmark} onClick={this.handleClick}></i></button>
      <button className="search-btn"><i className="fas fa-search" onClick={this.findSimilar}></i></button>
      <h1>{this.props.result.Name}</h1>
      <p>{this.props.result.wTeaser}</p>
    </div>
    )
  } 
}
