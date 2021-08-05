import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchDeliveryNote } from '../../redux/actions/deliverynoteActions';
import { fetchOrders } from '../../redux/actions/ordersActions';

class Container extends Component {

  componentDidMount() {

    const { fetchDeliveryNote, fetchOrders } = this.props;

    fetchOrders()
    fetchDeliveryNote()
  }


  componentDidUpdate(preProps) {

    const {fetchOrders, fetchDeliveryNote } = this.props;

    if ( (preProps.clock.min%10 === 0) & preProps.clock.seg === 0) {
      
      fetchOrders()
      fetchDeliveryNote()
    }
  }

  render() {
    const {deliveryNote, orders } = this.props;

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

export default connect(mapStateToProps, mapDispatchToProps)(Container);

