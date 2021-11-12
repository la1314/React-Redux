/**
 * Actions relacionadas con los Albaranes
 */

import axios from 'axios';
export const DELIVERY_NOTE_REQUEST = 'DELIVERY_NOTE_REQUEST';
export const DELIVERY_NOTE_SUCCESS = 'DELIVERY_NOTE_SUCCESS';
export const DELIVERY_NOTE_ERROR = 'DELIVERY_NOTE_ERROR';

export const FETCH_DELIVERY_NOTE_REQUEST = () => {
    return {
        type: "DELIVERY_NOTE_REQUEST"
    }
}

export const FETCH_DELIVERY_NOTE_SUCCESS = () => {
    return {
        type: "DELIVERY_NOTE_SUCCESS"
    }
}

export const FETCH_DELIVERY_NOTE_ERROR = () => {
    return {
        type: "DELIVERY_NOTE_ERROR"
    }
}


//Función asincrona que recupera el total de Albaranes
export const fetchDeliveryNote = () => async dispatch => {

    dispatch({ type: 'DELIVERY_NOTE_REQUEST' })

    var url = 'http://192.168.1.155/php/query.php';
    var bodyFormData = new FormData();
    bodyFormData.append('action', 'getDeliveryNotes');
    

    await axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        header: {
            'content-type': 'multipart/form-data'
        }
    }).then(

        res => {
            dispatch({ type: 'DELIVERY_NOTE_SUCCESS', payload: res.data })
        }

    ).catch(error => {
        const errorMsg = error.message
        dispatch({ type: 'DELIVERY_NOTE_ERROR', payload: errorMsg })
    });
}