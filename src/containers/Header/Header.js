import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../thunks/fetchBooks'

export class Header extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendSearch(this.state.search)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <header>
        <div className="title-search">
          <h1>Booktivist</h1>
          <h3>Read up, so you can Speak up</h3>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Search for Authors or Books" name="search" value={this.search} onChange={this.handleChange}></input>
            <button>Search</button>
          </form>
        </div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/2000px-Fist.svg.png' alt='activist fist'/>
        {/* <img src='../../styles/images/2000px-Fist.svg.png'/> */}
      </header>
    )
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  sendSearch: search => dispatch(fetchBooks(search))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);