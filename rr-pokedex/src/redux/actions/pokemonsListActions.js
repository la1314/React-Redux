import axios from 'axios'

export const ALL_POKEMONS_LIST_REQUEST = 'ALL_POKEMONS_LIST_REQUEST';
export const ALL_POKEMONS_LIST_SUCCESS = 'ALL_POKEMONS_LIST_SUCCESS';
export const ALL_POKEMONS_LIST_ERROR = 'ALL_POKEMONS_LIST_ERROR';

export const FETCH_POKEMONS_LIST_REQUEST = () => {
  return {
    type: "ALL_POKEMONS_LIST_REQUEST"
  }
}

export const FETCH_POKEMONS_LIST_SUCCESS = pokemons => {
  return {
    type: "ALL_POKEMONS_LIST_SUCCESS",
    payload: pokemons
  }
}


export const FETCH_POKEMONS_LIST_FAILURE = error => {
  return {
    type: "ALL_POKEMONS_LIST_ERROR",
    payload: error
  }
}



export const fetchPokemonsList = () => async dispatch => {

  dispatch({ type: 'ALL_POKEMONS_LIST_REQUEST' })
  await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(
    response => {

      const data = response.data.results

      //Tomar en consideración a futuro en caso que alguna consulta correcta de vacio
      if ( data !== null) {
        dispatch({ type: 'ALL_POKEMONS_LIST_SUCCESS', payload: data })
      }
    }
  ).catch(error => {
    const errorMsg = error.message
    dispatch({ type: 'ALL_POKEMONS_LIST_ERROR', payload: errorMsg })
  });


}

/*export const fetchPokemonsList = async () => {

  return (dispatch) => {
    dispatch(ALL_POKEMONS_LIST_REQUEST)
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then( response => {
        const pokemons = response.data
        dispatch(ALL_POKEMONS_LIST_SUCCESS(pokemons))
      })
      .catch( error => {
        const errorMsg = error.message
        dispatch(ALL_POKEMONS_LIST_ERROR(errorMsg))
      })
  }
}*/