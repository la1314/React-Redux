import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './style.scss';

class Main extends Component {

  //Se comprueba cada 5 segundos si han pasado los minutos necesarios
  //para cambiar el tipo de panel
  componentDidMount() {

    this.timer = setInterval(() => {
      this.checkPanel()
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // True Scoreboard | False Reduced Scoreboard
  checkPanel = () => {

    const { clock, dispatchPanel } = this.props

    var n = clock.min;

    if (n > 9) {
      n = n % 10
    }
    
   /* if (n < 6) {
      dispatchPanel(1)
    } else {
      dispatchPanel(0)
    }*/

    if ( n%2 === 0) {
      dispatchPanel(1)
    } else {
      dispatchPanel(0)
    }

  }

  render() {

    const { panel } = this.props

    return (
      <Page panel={panel.type} />
    )
  }
}

//Se cargan los states del storage
const mapStateToProps = state => ({
  clock: state.clock,
  panel: state.panel
});

//Se declaran los dispatch a importar
const mapDispatchToProps = (dispatch) => {

  return {
    // Dispatching plain actions
    dispatchPanel: (value) => dispatch({ type: 'PANEL_SUCCESS', payload: value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

