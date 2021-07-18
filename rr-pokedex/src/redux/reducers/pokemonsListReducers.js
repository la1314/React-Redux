const initialState = {
  loading: false,
  pokemons: [],
  error: ''
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "ALL_POKEMONS_LIST_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "ALL_POKEMONS_LIST_SUCCESS":
      return {
        loading: false,
        pokemons: action.payload,
        error: ''
      }

    case "ALL_POKEMONS_LIST_ERROR":
      return {
        loading: false,
        pokemons: [],
        error: action.payload
      }


    default:
      return state

  }
}
