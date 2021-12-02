import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchNotes } from '../../../redux/actions/notesActions';

import './style.scss';
import './stylepc.scss';

class Body extends Component {

  //Variable utilizada para comprobar el montaje del componente en el DOM virtual
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;

    const { fetchNotes } = this.props;
    fetchNotes();
  }

  //Se desmonta el componente correctamente
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    const { notes, delay } = this.props;

    return (
      <Page
        notes={notes.data}
        actual_iteration={delay.actual_iteration}
        delay={delay}
      />
    )
  }
}

//Se declaran los state a importar del storage
const mapStateToProps = state => ({
  notes: state.notes,
  delay: state.delay
});

//Se declaran los dispatch a importar del storage
const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchNotes: () => dispatch(fetchNotes()),
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

