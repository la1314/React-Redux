import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDelay } from '../../redux/actions/delayActions';
import Page from './page';
import './style.scss';

class Main extends Component {
    //Variable utilizada para comprobar el montaje del componente en el DOM virtual
    _isMounted = false;

    //Componente montado correctamente 
    componentDidMount() {
        this._isMounted = true;
        const { dispatchDelay } = this.props;
        dispatchDelay();

        //TODO
        this.carrouselTimer = setInterval(() => {

        }, 15000);
    }

    
    componentDidUpdate(preProps) {

        const { dispatchPanel, panel, dispatchDelay, delay } = this.props;

        //Cada 2 minutos se actualiza la lista de pedidos retrasados
        if ((preProps.clock.min % 2 === 0) & preProps.clock.seg === 0) {
            dispatchDelay();
        }

        //Cada minuto se comprube si aún hay pedidos retrasados para mostrar un panel u otro
        if ((preProps.clock.min % 1 === 0) & preProps.clock.seg === 0) {

            if (delay.data.length) {
                dispatchPanel(false)
            } else {
                dispatchPanel(!panel)
            }

        }
    }

    //Se desmonta el componente correctamente 
    componentWillUnmount() {
        this._isMounted = false;
        //TODO
        clearInterval(this.carrouselTimer);
    }

    render() {
        const { panel } = this.props;
        return (
            <Page panel={panel} />
        )
    }
}

//Se declaran los state a importar del storage
const mapStateToProps = state => ({
    panel: state.panel.type,
    clock: state.clock,
    delay: state.delay
});

//Se declaran los dispatch a importar del storage
const mapDispatchToProps = (dispatch) => {

    return {
        // dispatching plain actions
        dispatchDelay: () => dispatch(fetchDelay()),
        dispatchPanel: (value) => dispatch({ type: 'PANEL_SUCCESS', payload: value })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);