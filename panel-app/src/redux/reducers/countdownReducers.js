const initialProps = {
  days: [[0, 0], [6, 18], [6, 18], [6, 18], [6, 18], [6, 17], [0, 0]],
  hour: '',
  min: '',
  seg: ''
};

export default function reducer(state = initialProps, action) {

  switch (action.type) {

    case "GET_COUNTDOWN":

      var date = new Date();
      return {
        ...state,
        hour: updateTime(state.days[date.getDay()][1] - date.getHours()),
        min: updateTime(60 - date.getMinutes()),
        seg: updateTime(60 - date.getSeconds())
      }

    default:
      return state

  }
}



function updateTime(data) {
  if (data < 10) {
    return "0" + data;
  }
  else {
    return data;
  }
}