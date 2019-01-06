import React, { Component } from 'react';

export class Card extends Component{ 
  constructor(){
    super()
    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
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
  }

  render() {
    let bookmark = "far fa-bookmark"
    const { isFavorite } = this.state
    if (isFavorite) {
      bookmark = "fas fa-bookmark"
    }
    return (
    <div className="card" key={this.props.result.Name}>
      <button><i className={bookmark} onClick={this.handleClick}></i></button>
      <button><i className="fas fa-search" onClick={this.findSimilar}></i></button>
      <h1>{this.props.result.Name}</h1>
      <p>{this.props.result.wTeaser}</p>
    </div>
    )
  } 
}
