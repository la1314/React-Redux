/**
 * Actions relacionadas con los Pedidos retrasados
 */

import axios from 'axios';
export const DELAY_REQUEST = 'DELAY_REQUEST';
export const DELAY_SUCCESS = 'DELAY_SUCCESS';
export const DELAY_ERROR = 'DELAY_ERROR';

export const FETCH_DELAY_REQUEST = () => {
  return {
    type: "DELAY_REQUEST"
  }
}

export const FETCH_DELAY_SUCCESS = () => {
  return {
    type: "DELAY_SUCCESS"
  }
}

export const FETCH_DELAY_ERROR = () => {
  return {
    type: "DELAY_ERROR"
  }
}

//Función asincrona que recupera el total de Pedidos pedientes
export const fetchDelay = () => async dispatch => {

  dispatch({ type: 'DELAY_REQUEST' })

  let url = 'http://192.168.1.149/php/query.php'
  //let url = '../php/query.php';
  let bodyFormData = new FormData();
  bodyFormData.append('action', 'getDelay');

  await axios({
    method: 'post',
    url: url,
    data: bodyFormData,
    header: {
      'content-type': 'multipart/form-data'
    }
  }).then(

    res => {
      
      dispatch({ type: 'DELAY_SUCCESS', payload: res.data })
    }

  ).catch(error => {
    const errorMsg = error.message
    dispatch({ type: 'DELAY_ERROR', payload: errorMsg })
  });


}
