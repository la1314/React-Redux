import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Main extends Component {

  componentDidMount(){

    const {get_clock, get_countDown} = this.props;
    setInterval(() => {
      get_clock()
      get_countDown()
    }, 1000);
  }

  render() {
    const { clock, countDown } = this.props;
    return (
      <Page
        clock={clock}
        countDown={countDown}
      />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
  countDown: state.countDown
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    get_clock: () => dispatch({ type: 'GET_CLOCK' }),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

