const initialState = {
  loading: false,
  data: [],
  error: ''
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "ORDERS_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case "ORDERS_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }


    default:
      return {
        ...state
      }

  }
}