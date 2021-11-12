import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import './style.scss';

class Main extends Component {

    //TODO implementar el update del state panel
    //Se comprueba cada 5 segundos si han pasado los minutos necesarios
    //para cambiar el tipo de panel
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <Page />
        )
    }
}

//Se declaran los state a importar del storage
const mapStateToProps = state => ({

});

//Se declaran los dispatch a importar del storage
const mapDispatchToProps = (dispatch) => {

    return {
        // Dispatching plain actions
        //dispatchPanel: (value) => dispatch({ type: 'PANEL_SUCCESS', payload: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);