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
    panel: state.panel.type
});


export default connect(mapStateToProps)(Main);