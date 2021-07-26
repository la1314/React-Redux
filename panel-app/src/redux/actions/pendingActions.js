export const PENDING_REQUEST = 'PENDING_REQUEST';
export const PENDING_SUCCESS = 'PENDING_SUCCESS';
export const PENDING_ERROR = 'PENDING_ERROR';

export const FETCH_PENDING_REQUEST = () => {
    return {
        type: "PENDING_REQUEST"
    }
}

export const FETCH_PENDING_SUCCESS = () => {
    return {
        type: "PENDING_SUCCESS"
    }
}

export const FETCH_PENDING_ERROR = () => {
    return {
        type: "PENDING_ERROR"
    }
}

export const fetchPending = () => async dispatch => {

    dispatch({ type: 'PENDING_SUCCESS', payload: (Math.random() * (20 - 0) + 0) })

}