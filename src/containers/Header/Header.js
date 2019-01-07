import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../thunks/fetchBooks';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router';


export class Header extends Component {
  constructor(){
    super()
    this.state = {
      search: '',
      header: false
    }
  }

  componentDidMount(){
    const { pathname } = this.props.location
    if(pathname !== '/' ) {
    this.setState({header: true})      
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.search) {
      this.props.sendSearch(this.state.search)
      this.setState({header: true, search: ''})
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { header } = this.state
    let headerClass = 'header-false'
    if(header) {
      headerClass = 'header-true'
    }
    return (
      <div className={headerClass}>
        <Link to='/MustReadList' onClick={this.toggleHeader} className='header-link'>Must Read List</Link>
        <header>
          <div className="title-search">
            <h1>Booktivist</h1>
            <h3>Read up, so You can Speak up</h3>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Search for Authors or Books" name="search" value={this.state.search} onChange={this.handleChange}></input>
              <button onClick={this.handleSubmit}><Link to="/SearchResults">Search</Link></button>
            </form>
          </div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/2000px-Fist.svg.png' alt='activist fist'/>
        </header>
      </div>
    )
  }
}

// export const mapStateToProps = state => ({

// });

export const mapDispatchToProps = dispatch => ({
  sendSearch: search => dispatch(fetchBooks(search))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Header));