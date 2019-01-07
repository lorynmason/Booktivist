import React, { Component } from 'react';
import Header from '../../containers/Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import '../../styles/main.scss'
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router';
import { getBookList } from '../../thunks/getBookList';

class App extends Component {
  componentDidMount(){
    this.props.getBookList()
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route path="/SearchResults" component={CardContainer} />
        <Route path="/MustReadList" component={CardContainer} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
  getBookList: () => dispatch(getBookList())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
