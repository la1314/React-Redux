import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchClock } from '../../redux/actions/clockActions';

class Header extends Component {

  componentDidMount() {

    const { fetchClock, get_countDown } = this.props;

    fetchClock()
   

    this.timer = setInterval(() => {
      get_countDown()
    }, 1000);
  }


  componentDidUpdate(preProps) {

    const { fetchClock } = this.props;

    if ( (preProps.clock.min%30 === 0) & preProps.clock.seg === 0) {
      
      fetchClock()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    const { clock } = this.props;
    
    return (
      <Page
        clock={clock}
      />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
});

const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchClock: () => dispatch(fetchClock()),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

