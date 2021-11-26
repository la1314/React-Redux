import axios from 'axios';

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

    dispatch({ type: 'CLOCK_REQUEST' })
    let bodyFormData = new FormData();
    bodyFormData.append('action', 'getDate');
    // '../php/query.php' una vez toque hacer el Build
    let url = 'http://192.168.1.149/php/query.php';
    //let url = '../php/query.php';

    await axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        header: {
            'content-type': 'multipart/form-data'
        }
    }).then(

        res => {

            const date = res.data[0][0].split(' ');
            const year = date[0].split('-')[0];
            const month = date[0].split('-')[1];
            const day = date[0].split('-')[2];
            const hour = date[1].split(':')[0];
            const minutes = date[1].split(':')[1];
            const seconds = date[1].split(':')[2];

            const today = new Date(year, month - 1, day, hour, minutes, seconds);
            dispatch({ type: 'CLOCK_SUCCESS', payload: today })
        }

    ).catch(error => {
        const errorMsg = error.message
        dispatch({ type: 'CLOCK_ERROR', payload: errorMsg })
    });


}