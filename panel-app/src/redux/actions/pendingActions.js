export const PENDING_REQUEST = 'PENDING_REQUEST';
export const PENDING_SUCCESS = 'PENDING_SUCCESS';
export const PENDING_ERROR = 'PENDING_ERROR';

export const FETCH_PENDING_REQUEST = () => {
    return {
        type: "PENDING_REQUEST"
    }
}

export const FETCH_PENDING_SUCCESS = () => {
    return {
        type: "PENDING_SUCCESS"
    }
}

export const FETCH_PENDING_ERROR = () => {
    return {
        type: "PENDING_ERROR"
    }
}

export const fetchPending = () => async dispatch => {
    
    dispatch({ type: 'PENDING_SUCCESS', payload: Math.round((Math.random() * (20 - 0) + 0)) })

}

/*export const fetchPokemonsList = () => async dispatch => {

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
  }*/