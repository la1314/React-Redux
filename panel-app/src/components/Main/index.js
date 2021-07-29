import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchDeliveryNote } from '../../redux/actions/deliverynoteActions';
import { fetchPending } from '../../redux/actions/pendingActions';
import { fetchClock } from '../../redux/actions/clockActions';

class Main extends Component {

  componentDidMount() {

    const { fetchClock, get_countDown, fetchDeliveryNote, fetchPending } = this.props;

    fetchPending()
    fetchDeliveryNote()
    fetchClock()
    get_countDown()
    setInterval(() => {
      get_countDown()
    }, 1000);

  }

  render() {
    const { clock, deliveryNote, pending } = this.props;

    if (clock.c_hour === '') {
      return null;
    }

    return (
      <Page
        clock={clock}
        pending={pending}
        deliveryNote={deliveryNote}
      />
    )
  }
}

const mapStateToProps = state => ({
  clock: state.clock,
  pending: state.pending,
  deliveryNote: state.deliveryNote,
});

const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchClock: () => dispatch(fetchClock()),
    get_countDown: () => dispatch({ type: 'GET_COUNTDOWN' }),
    fetchDeliveryNote: () => dispatch(fetchDeliveryNote()),
    fetchPending: () => dispatch(fetchPending())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

