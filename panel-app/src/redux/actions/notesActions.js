/**
 * Actions relacionadas con los mensajes
 */

import axios from 'axios';
export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';
export const NOTES_ERROR = 'NOTES_ERROR';



export const FETCH_NOTES_REQUEST = () => {
  return {
    type: "NOTES_REQUEST"
  }
}

export const FETCH_NOTES_SUCCESS = () => {
  return {
    type: "NOTES_SUCCESS"
  }
}

export const FETCH_NOTES_ERROR = () => {
  return {
    type: "NOTES_ERROR"
  }
}

//Función asincrona que recupera los mensajes
export const fetchNotes = () => async dispatch => {

  dispatch({ type: 'NOTES_REQUEST' })

  let url = 'http://192.168.1.149/php/query.php';
  //let url = '../php/query.php';
  let bodyFormData = new FormData();
  bodyFormData.append('action', 'getNotes');

  await axios({
    method: 'post',
    url: url,
    data: bodyFormData,
    header: {
      'content-type': 'multipart/form-data'
    }
  }).then(

    res => {

      //El php devuelve un JSON
      dispatch({ type: 'NOTES_SUCCESS', payload: res.data[0] })
    }

  ).catch(error => {
    const errorMsg = error.message
    dispatch({ type: 'NOTES_ERROR', payload: errorMsg })
  });


}