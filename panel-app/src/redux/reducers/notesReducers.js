const initialState = {
    loading: false,
    data: '',
    error: ''
  };
  
  export default function reducer(state = initialState, action) {
  
    switch (action.type) {
  
      case "NOTES_REQUEST":
        return {
          ...state,
          loading: true
        }
  
      case "NOTES_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        }
  
      case "NOTES_ERROR":
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