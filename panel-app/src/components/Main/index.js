import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './style.scss';

class Main extends Component {

  render() {
    return (
      <Page />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
});



export default connect(mapStateToProps)(Main);

