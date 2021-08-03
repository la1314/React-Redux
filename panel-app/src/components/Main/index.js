import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchDeliveryNote } from '../../redux/actions/deliverynoteActions';
import { fetchOrders } from '../../redux/actions/ordersActions';
import { fetchClock } from '../../redux/actions/clockActions';
import './style.scss';

class Main extends Component {

  componentDidMount() {

    const { fetchClock, get_countDown, fetchDeliveryNote, fetchOrders } = this.props;

    fetchOrders()
    fetchDeliveryNote()
    fetchClock()
    get_countDown()

    this.timer = setInterval(() => {
      get_countDown()
    }, 1000);

  }


  componentDidUpdate(preProps) {

    const { fetchClock, get_countDown, fetchOrders, fetchDeliveryNote } = this.props;

    if (preProps.clock.min === 0 & preProps.clock.seg === 0) {
      fetchClock()
      get_countDown()
      fetchOrders()
      fetchDeliveryNote()
    }

  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { clock, deliveryNote, orders } = this.props;

    if (clock.c_hour === '') {
      return null;
    }

    return (
      <Page
        clock={clock}
        orders={orders}
        deliveryNote={deliveryNote}
      />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
  orders: state.orders,
  deliveryNote: state.deliveryNote,
});

const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchClock: () => dispatch(fetchClock()),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' }),
    fetchDeliveryNote: () => dispatch(fetchDeliveryNote()),
    fetchOrders: () => dispatch(fetchOrders())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

