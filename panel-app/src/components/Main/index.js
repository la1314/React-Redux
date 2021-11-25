import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './style.scss';

class Main extends Component {
    //Variable utilizada para comprobar el montaje del componente en el DOM virtual
    _isMounted = false;

    //Componente montado correctamente 
    componentDidMount() {
        this._isMounted = true;
    }
    componentDidUpdate(preProps) {

        const { dispatchPanel, panel } = this.props;

        if ((preProps.clock.min % 10 === 0) & preProps.clock.seg === 0) {
            dispatchPanel(!panel)
        }
    }

    //Se desmonta el componente correctamente 
    componentWillUnmount() {
        this._isMounted = false;

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
    clock: state.clock
});

//Se declaran los dispatch a importar del storage
const mapDispatchToProps = (dispatch) => {

    return {
        // dispatching plain actions
        dispatchPanel: (value) => dispatch({ type: 'PANEL_SUCCESS', payload: value })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);