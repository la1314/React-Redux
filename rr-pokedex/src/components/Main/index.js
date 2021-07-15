import React, { Component } from 'react';
import {connect} from 'react-redux';
import Page from './page';

class Main extends Component {

  render(){

    const {pokemonList} = this.props;
    console.log(pokemonList);

    return(
      <Page />
    )
  }
}

const mapStateToProps = state => ({
    pokemonList: state.pokemonList
});

export default connect(mapStateToProps)(Main);

