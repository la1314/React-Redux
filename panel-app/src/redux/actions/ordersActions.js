export const ORDERS_REQUEST = 'ORDERS_REQUEST';
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS';
export const ORDERS_ERROR = 'ORDERS_ERROR';

export const FETCH_ORDERS_REQUEST = () => {
    return {
        type: "ORDERS_REQUEST"
    }
}

export const FETCH_ORDERS_SUCCESS = () => {
    return {
        type: "ORDERS_SUCCESS"
    }
}

export const FETCH_ORDERS_ERROR = () => {
    return {
        type: "ORDERS_ERROR"
    }
}

export const fetchOrders = () => async dispatch => {
    
    dispatch({ type: 'ORDERS_SUCCESS', payload: Math.round((Math.random() * (20 - 0) + 0)) })

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