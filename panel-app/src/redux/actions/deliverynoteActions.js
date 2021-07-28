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

export const fetchDeliveryNote = () => async dispatch => {

    dispatch({ type: 'DELIVERY_NOTE_SUCCESS', payload: Math.round((Math.random() * (20 - 0) + 0)) })

}