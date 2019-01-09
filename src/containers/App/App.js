import React, { Component } from 'react';
import Header from '../../containers/Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { Page404 } from '../../components/Page404/Page404'
import '../../styles/main.scss'
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router';
import { getBookList } from '../../helpers/getBookList';
import PropTypes from 'prop-types';


export class App extends Component {
  componentDidMount(){
    this.props.getBookList()
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/SearchResults" component={CardContainer} />
          <Route path="/MustReadList" component={CardContainer} />
          <Route component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getBookList: () => dispatch(getBookList())
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App));

App.propTypes = {
  getBookList: PropTypes.func.isRequired
};