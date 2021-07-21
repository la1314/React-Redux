const initialProps = {
  hour: '',
  min: '',
  seg: ''
};

export default function reducer(state = initialProps, action) {

  switch (action.type) {

    case "GET_CLOCK":

      var date = new Date();
      return {
        ...state,
        hour: updateTime(date.getHours()),
        min: updateTime(date.getMinutes()),
        seg: updateTime(date.getSeconds())
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
