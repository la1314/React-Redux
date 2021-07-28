const initialProps = {
  serverDate: null,
  countDownDate: null,
  hour: '',
  min: '',
  seg: '',
  days: [[0, 0], [6, 18], [6, 18], [6, 18], [6, 18], [6, 17], [0, 0]],
  c_hour: '',
  C_min: '',
  c_seg: ''
};

export default function reducer(state = initialProps, action) {

  //console.log(state.days)

  switch (action.type) {

    case "CLOCK_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "CLOCK_SUCCESS":

      var newDate = new Date(action.payload);
      newDate.setHours(state.days[newDate.getDay()][1],0,0);

      return {
        ...state,
        loading: false,
        serverDate: action.payload,
        countDownDate: newDate,
        error: ''
      }

    case "CLOCK_ERROR":

      return {
        ...state,
        loading: false,
        serverDate: null,
        error: action.payload
      }

    case "GET_COUNTDOWN":

      var date = new Date(state.serverDate);
      date.setSeconds(date.getSeconds()+1)
      var timeleft = state.countDownDate - date;

      return {
        ...state,
        serverDate: date,
        c_hour: updateTime(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        c_min: updateTime(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))),
        c_seg: updateTime(Math.floor((timeleft % (1000 * 60)) / 1000)),
        hour: date.getHours(),
        min: date.getMinutes(),
        seg: date.getSeconds()
      }


    default:
      
      return {
        ...state
      }

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