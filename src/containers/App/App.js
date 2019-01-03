import React, { Component } from 'react';
import Header from '../../containers/Header/Header'
import '../../styles/main.scss'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    //check local storage
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
