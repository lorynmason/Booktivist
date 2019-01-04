import React, { Component } from 'react';
import Header from '../../containers/Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import '../../styles/main.scss'
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router';

class App extends Component {

  componentDidMount() {
    //check local storage
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/SearchResults" component={CardContainer} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
