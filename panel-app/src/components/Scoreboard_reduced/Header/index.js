import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchClock } from '../../../redux/actions/clockActions';
import { fetchDeliveryNote } from '../../../redux/actions/deliverynoteActions';
import { fetchOrders } from '../../../redux/actions/ordersActions';
import './style.scss';

class Header extends Component {

  componentDidMount() {

    const { fetchClock, get_countDown, fetchDeliveryNote, fetchOrders } = this.props;

    fetchOrders()
    fetchDeliveryNote()
    fetchClock()
    
    //Luego de 1 segundo inicia el CountDown
    this.timer = setInterval(() => {
      get_countDown()
    }, 1000);
  }


  //Cada 30 minutos comprueba que la hora de la app sea igual a la del servidor
  componentDidUpdate(preProps) {

    const { fetchClock, fetchOrders, fetchDeliveryNote } = this.props;

    if ( (preProps.clock.min%30 === 0) & preProps.clock.seg === 0) {
      
      fetchClock()
    }

    if ((preProps.clock.min % 10 === 0) & preProps.clock.seg === 0) {

      fetchOrders()
      fetchDeliveryNote()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    const { clock, deliveryNote, orders } = this.props;
    
    return (
      <Page
        clock={clock}
        orders={orders}
        deliveryNote={deliveryNote}
      />
    )
  }
}

//Se declaran los state a importar
const mapStateToProps = state => ({
  clock: state.clock,
  orders: state.orders,
  deliveryNote: state.deliveryNote
});

//Se declaran los dispatch a importar
const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchClock: () => dispatch(fetchClock()),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' }),
    fetchDeliveryNote: () => dispatch(fetchDeliveryNote()),
    fetchOrders: () => dispatch(fetchOrders())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

