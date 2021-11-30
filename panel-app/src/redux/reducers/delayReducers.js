const initialState = {
  loading: false,
  data: [],
  carrousel: [],
  iteration: 0,
  error: ''
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "DELAY_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "DELAY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case "DELAY_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        carrousel: [],
        iteration: 0,
        error: action.payload
      }

    case "CARROUSEL_SUCCESS":
      return {
        ...state,
        carrousel: action.payload,
      }

    case "ITERATION_SUCCESS":
      return {
        ...state,
        iteration: state.data.length,
      }

    default:
      return {
        ...state
      }

  }
}

//TODO
function name(params) {
  
}