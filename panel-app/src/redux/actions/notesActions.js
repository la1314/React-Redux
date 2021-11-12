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

  var url = 'http://192.168.1.155/php/query.php';
  var bodyFormData = new FormData();
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
      
      dispatch({ type: 'NOTES_SUCCESS', payload: res.data })
    }

  ).catch(error => {
    const errorMsg = error.message
    dispatch({ type: 'NOTES_ERROR', payload: errorMsg })
  });


}