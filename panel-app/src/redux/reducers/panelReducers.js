const initialState = {
    type: 0
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
  
      case "PANEL_SUCCESS":
        return {
          ...state,
          type: action.payload
        }
  
      default:
        return {
          ...state
        }
  
    }
  }