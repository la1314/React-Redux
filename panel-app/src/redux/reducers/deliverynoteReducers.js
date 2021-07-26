const initialState = {
    loading: false,
    data: 0,
    error: ''
  };
  
  export default function reducer(state = initialState, action) {
  
    switch (action.type) {
  
      case "DELIVERY_NOTE_REQUEST":
        return {
          ...state,
          loading: true
        }
  
      case "DELIVERY_NOTE_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: ''
        }
  
      case "DELIVERY_NOTE_ERROR":
        return {
          loading: false,
          data: 0,
          error: action.payload
        }
  
  
      default:
        return state
  
    }
  }