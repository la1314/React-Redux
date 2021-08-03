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

    //var random = Math.round(Math.random() * (1 - 0) + 0);
    //No admite octal en modo restringido "08" mes 0-11
    /*if (random) {
        const today = new Date(2021, 8 - 1, 3, 18, 59, 55);
        dispatch({ type: 'CLOCK_SUCCESS', payload: today })
    } else {
        const today = new Date(2021, 8 - 1, 3, 18, 0, 0);
        dispatch({ type: 'CLOCK_SUCCESS', payload: today })
    }*/
    const today = new Date(2021, 8 - 1, 7, 6, 0, 0);
    dispatch({ type: 'CLOCK_SUCCESS', payload: today })
}