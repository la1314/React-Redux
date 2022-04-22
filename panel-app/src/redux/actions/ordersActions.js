/**
 * Actions relacionadas con los Pedidos
 */

import axios from 'axios';
export const ORDERS_REQUEST = 'ORDERS_REQUEST';
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS';
export const ORDERS_ERROR = 'ORDERS_ERROR';

export const FETCH_ORDERS_REQUEST = () => {
  return {
    type: "ORDERS_REQUEST"
  }
}

export const FETCH_ORDERS_SUCCESS = () => {
  return {
    type: "ORDERS_SUCCESS"
  }
}

export const FETCH_ORDERS_ERROR = () => {
  return {
    type: "ORDERS_ERROR"
  }
}

//Función asincrona que recupera el total de Pedidos pedientes
export const fetchOrders = () => async dispatch => {

  dispatch({ type: 'ORDERS_REQUEST' })

  
  let url = 'http://192.168.1.147/php/query.php'
  //let url = '../php/query.php';
  let bodyFormData = new FormData();
  bodyFormData.append('action', 'getOrders');


  await axios({
    method: 'post',
    url: url,
    data: bodyFormData,
    header: {
      'content-type': 'multipart/form-data'
    }
  }).then(

    res => {
      
      dispatch({ type: 'ORDERS_SUCCESS', payload: res.data })
    }

  ).catch(error => {
    const errorMsg = error.message
    dispatch({ type: 'ORDERS_ERROR', payload: errorMsg })
  });

}
