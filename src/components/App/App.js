import React, { Component } from 'react';
import { Header } from '../Header/Header'
import '../../styles/main.scss'

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

export default App;
