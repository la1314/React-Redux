import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './style.scss';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {boolean: false};
  }



  render() {

    const {boolean} = this.state

    return (
      <Page boolean={boolean} />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
});



export default connect(mapStateToProps)(Main);

