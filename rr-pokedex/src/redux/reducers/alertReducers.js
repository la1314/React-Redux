const initialProps = {
  showAlert: false,
  textAlert: ''
};

export default function reducer(state = initialProps, action) {

  switch (action.type) {

    case "UPDATE_SHOW_ALERT":
      return {
        ...state,
        showAlert: action.payload
      }
     
    case "SET_TEXT_ALERT":
      return {
        ...state,
        textAlert: action.payload
      }
    

    default:
      return state

  }
}
