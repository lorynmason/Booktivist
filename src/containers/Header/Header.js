import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../thunks/fetchBooks';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';


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
    const { search } = this.state
    e.preventDefault()
    if (search) {
      this.props.sendSearch(search)
      this.setState({header: true, search: ''})
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  closeSplash = () => {
    this.setState({header: true})
  }

  render() {
    const { header } = this.state
    let headerClass = 'header-false'
    if(header) {
      headerClass = 'header-true'
    }
    return (
      <div className={headerClass}>
        <Link to='/MustReadList' onClick={this.closeSplash} className='header-link'>Must Read List</Link>
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

export const mapDispatchToProps = dispatch => ({
  sendSearch: search => dispatch(fetchBooks(search))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Header));

Header.propTypes = { 
  sendSearch: PropTypes.func.isRequired,
};