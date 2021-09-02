import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

import './style.scss';

class Body extends Component {

  componentDidMount() {
    
  }

  //Cada 10 minutos comprueba si han habido cambios en Pedidos o Albaradnes
  componentDidUpdate(preProps) {

    
  }

  render() {
  

    return (
      <Page
        
      />
    )
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {

  return {
    // dispatching plain actions
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

