import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { fetchNotes } from '../../../redux/actions/notesActions';
import './style.scss';
import './stylepc.scss';

class Body extends Component {

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    
    const { fetchNotes } = this.props;
    fetchNotes();
  }

 
  componentWillUnmount() {
    this._isMounted = false;
  }
  


  render() {
    
    const {notes} = this.props;

    return (
      <Page
        notes = {notes.data}
      />
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

