import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchClock } from '../../../redux/actions/clockActions';
import './style.scss';
import './stylepc.scss';

class Header extends Component {

  _isMounted = false;

  componentDidMount() {

    this._isMounted = true;

    const { fetchClock, get_countDown } = this.props;

    fetchClock();
   
    //Luego de 1 segundo inicia el CountDown
    this.timer = setInterval(() => {
      get_countDown();
    }, 1000);
  }


  //Cada 30 minutos comprueba que la hora de la app sea igual a la del servidor
  componentDidUpdate(preProps) {

    const { fetchClock } = this.props;

    if ( (preProps.clock.min%30 === 0) & preProps.clock.seg === 0) {
      
      fetchClock()
    }
  }

  componentWillUnmount() {
    
    this._isMounted = false;
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

//Se declaran los state a importar
const mapStateToProps = state => ({
  clock: state.clock,
});

//Se declaran los dispatch a importar
const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchClock: () => dispatch(fetchClock()),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

