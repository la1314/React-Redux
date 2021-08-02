export const CLOCK_REQUEST = 'CLOCK_REQUEST';
export const CLOCK_SUCCESS = 'CLOCK_SUCCESS';
export const CLOCK_ERROR = 'CLOCK_ERROR';
export const GET_COUNTDOWN = 'GET_COUNTDOWN';

export const FETCH_CLOCK_REQUEST = () => {
    return {
        type: "CLOCK_REQUEST"
    }
}

export const FETCH_CLOCK_SUCCESS = () => {
    return {
        type: "CLOCK_SUCCESS"
    }
}

export const FETCH_CLOCK_ERROR = () => {
    return {
        type: "CLOCK_ERROR"
    }
}

export const GET_COUNTDOWN_ACTION = () => {
    return {
        type: "GET_COUNTDOWN"
    }
}

export const fetchClock = () => async dispatch => {

    //No admite octal en modo restringido "08" mes 0-11
    const today = new Date(2021,8-1,3,13,0,0);
    dispatch({ type: 'CLOCK_SUCCESS', payload: today })

}