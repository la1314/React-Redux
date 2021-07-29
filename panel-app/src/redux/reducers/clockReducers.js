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

  switch (action.type) {

    case "CLOCK_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "CLOCK_SUCCESS":

      var newDate = new Date(action.payload);
      newDate.setHours(state.days[newDate.getDay()][1], 0, 0);

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
      date.setSeconds(date.getSeconds() + 1)
      var timeleft = state.countDownDate - date;

      return {
        ...state,
        serverDate: date,
        c_hour: timeleft_cacl(timeleft, 'hours'),
        c_min: timeleft_cacl(timeleft, 'minutes'),
        c_seg: timeleft_cacl(timeleft, 'seconds'),
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

function timeleft_cacl(timeleft, type) {

  var value;

  switch (type) {
    case 'hours':
      value = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      break;
    case 'minutes':
      value = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      break;
    case 'seconds':
      value = Math.floor((timeleft % (1000 * 60)) / 1000);
      break;

    default:
      value = 0;
      break;
  }

  return updateTime(value)

}