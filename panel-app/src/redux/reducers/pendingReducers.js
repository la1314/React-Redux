const initialState = {
  loading: false,
  data: 0,
  error: ''
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "PENDING_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "PENDING_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case "PENDING_ERROR":
      return {
        ...state,
        loading: false,
        data: 0,
        error: action.payload
      }


    default:
      return {
        ...state
      }

  }
}