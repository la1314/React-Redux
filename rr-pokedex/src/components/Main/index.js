import React, { Component } from 'react';
import {connect} from 'react-redux';
import Page from './page';
import { fetchPokemonsList } from '../../redux/actions/pokemonsListActions';

class Main extends Component {

  componentDidMount(){

      this.props.fetchPokemonsList();
 
  }

  render(){

    const {alerts, pokemonList} = this.props;

    return(
      <Page
       pokemonList={pokemonList}
        alerts={alerts}
      />
    )
  }
}

const mapStateToProps = state => ({
    pokemonList: state.pokemonList,
    alerts: state.alerts
});

const mapDispathToProps = {
  fetchPokemonsList
}

export default connect(mapStateToProps, mapDispathToProps)(Main);

