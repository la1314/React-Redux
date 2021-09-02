import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchDeliveryNote } from '../../../redux/actions/deliverynoteActions';
import { fetchOrders } from '../../../redux/actions/ordersActions';
import './style.scss';

class Body extends Component {

  componentDidMount() {

    const { fetchDeliveryNote, fetchOrders } = this.props;

    fetchOrders()
    fetchDeliveryNote()
  }

  //Cada 10 minutos comprueba si han habido cambios en Pedidos o Albaradnes
  componentDidUpdate(preProps) {

    const { fetchOrders, fetchDeliveryNote } = this.props;

    if ((preProps.clock.min % 10 === 0) & preProps.clock.seg === 0) {

      fetchOrders()
      fetchDeliveryNote()
    }
  }

  render() {
    const { deliveryNote, orders } = this.props;

    return (
      <Page
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
    fetchDeliveryNote: () => dispatch(fetchDeliveryNote()),
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

