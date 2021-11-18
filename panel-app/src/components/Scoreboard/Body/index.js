import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchDeliveryNote } from '../../../redux/actions/deliverynoteActions';
import { fetchOrders } from '../../../redux/actions/ordersActions';
import './style.scss';
import './stylepc.scss';

class Body extends Component {

  //Variable utilizada para comprobar el montaje del componente en el DOM virtual
  _isMounted = false;

  componentDidMount() {

    this._isMounted = true;

    const { fetchDeliveryNote, fetchOrders } = this.props;

    fetchOrders()
    fetchDeliveryNote()
  }

  //Cada 5 minutos comprueba si han habido cambios en Pedidos o Albaranes
  componentDidUpdate(preProps) {

    const { fetchOrders, fetchDeliveryNote } = this.props;

    if ((preProps.clock.min % 5 === 0) & preProps.clock.seg === 0) {

      fetchOrders()
      fetchDeliveryNote()
    }
  }

  //Se desmonta el componente correctamente
  componentWillUnmount() {
    this._isMounted = false;
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

//Se declaran los state a importar del storage
const mapStateToProps = state => ({
  clock: state.clock,
  orders: state.orders,
  deliveryNote: state.deliveryNote,
});

//Se declaran los dispatch a importar del storage
const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchDeliveryNote: () => dispatch(fetchDeliveryNote()),
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

