//export const GET_CLOCK = 'GET_CLOCK';
//export const UPDATE_CLOCK = 'UPDATE_CLOCK';

export const GET_CLOCK_ACTION = () => {
  return {
    type: "GET_CLOCK"
  }
}


/*export const get_clock = () =>  dispatch => {

  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
   dispatch({ type: 'GET_CLOCK', payload: value })

}*/