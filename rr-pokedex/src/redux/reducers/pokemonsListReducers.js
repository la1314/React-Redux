const initialProps = {
  pokemons: []
};

export default function reducer(state = initialProps, action) {

  switch (action.type) {

    case "ALL_POKEMONS_LIST":
      return {
        ...state,
        showAlert: action.payload
      }
      

    default:
      return state

  }
}
