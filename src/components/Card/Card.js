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

  render() {
    let star = 'far fa-star'
    const { isFavorite } = this.state
    if (isFavorite) {
      star = 'fas fa-star'
    }
    return (
    <div className="card" key={this.props.result.Name}>
      <button><i className={star} onClick={this.handleClick}></i></button>
      <h1>{this.props.result.Name}</h1>
      <p>{this.props.result.wTeaser}</p>
    </div>
    )
  } 
}
