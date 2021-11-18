const initialProps = {
  serverDate: null,
  countDownDate: null,
  hour: '',
  min: '',
  seg: '',
  days: [[0, 0], [6, 18], [6, 18], [6, 18], [6, 18], [6, 17], [0, 0]],
  c_hour: '',
  C_min: '',
  c_seg: '',
  c_day: '',
  working_day: false,
};

export default function reducer(state = initialProps, action) {

  switch (action.type) {

    case "CLOCK_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "CLOCK_SUCCESS":

      var newDate = getWorkingDay(state.days, action.payload);

      return {
        ...state,
        loading: false,
        serverDate: action.payload,
        countDownDate: newDate.date,
        working_day: newDate.working,
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
        c_days: timeleft_cacl(timeleft, 'days'),
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


//Devuelve la fecha Countdown considerando el día actual y la hora de salida
function getWorkingDay(days, today) {

  const newDate = new Date(today);
  const day = today.getDay();
  const hour = today.getHours();
  var obj = {};
  //Indica si se encuenta en rango de jornada
  var working = false;

  // Comprueba que se esta en un día laborable 1 Lunes - 5 Viernes
  if (day > 0 & day < 6) {

    const inicio_Jornada = days[today.getDay()][0];
    const Fin_Jornada = days[today.getDay()][1];

    //Si la hora de newDate está dentro del rango 
    if (hour >= inicio_Jornada & hour < Fin_Jornada) {

      newDate.setHours(days[newDate.getDay()][1], 0, 0);

      working = true;

    } else if (hour < inicio_Jornada) {

      newDate.setHours(days[newDate.getDay()][0], 0, 0);



    } else {

      // Si es viernes suma 3 días
      if (day === 5) {
        newDate.setDate(newDate.getDate() + 3);

      } else {

        newDate.setDate(newDate.getDate() + 1);
      }

      newDate.setHours(days[newDate.getDay()][0], 0, 0);
    }

  } else {

    if (day === 0) {

      newDate.setDate(newDate.getDate() + 1);
    } else {
      newDate.setDate(newDate.getDate() + 2);
    }

    newDate.setHours(days[newDate.getDay()][0], 0, 0);

  }

  obj.date = newDate;
  obj.working = working;

  return obj;

}

//Concatena 0 a data si este es menor a 10
function updateTime(data) {
  if (data < 10) {
    return "0" + data;
  }
  else {
    return data;
  }
}

//calcula el tiempo restante
function timeleft_cacl(timeleft, type) {

  var value;

  switch (type) {

    case 'days':
      value = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      break;

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