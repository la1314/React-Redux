const initialProps = {
    data: 0
};

export default function reducer(state = initialProps, action) {

    switch (action.type) {

        case "GET_TOTAL":


            return {
                ...state,
                data: action.payload
            }

        default:
            return state

    }
}