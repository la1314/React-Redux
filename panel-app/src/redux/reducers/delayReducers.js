const initialState = {
  loading: false,
  data: [],
  carrousel: [],
  iteration: 0,
  actual_iteration: 0,
  error: ''
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case "DELAY_REQUEST":
      return {
        ...state,
        loading: true
      }

    case "DELAY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }

    case "DELAY_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        carrousel: [],
        iteration: 0,
        error: action.payload
      }

    case "CARROUSEL_SUCCESS":

      const res = splitData(state.data, 3);
      return {
        ...state,
        carrousel: res,
        iteration: res.length-1
      }

    case "ACTUAL_ITERATION_SUCCESS":

      const it = updateActualIteration(state.iteration, state.actual_iteration);

      return {
        ...state,
        actual_iteration: it
      }

    default:
      return {
        ...state
      }

  }
}

/**
 * Devuelve los datos divididos en un array de chunks
 */
const splitData = (data, chunks) => {

  let chunks_arr = [];

  for (let index = 0, j = data.length; index < j; index += chunks) {
    chunks_arr.push(data.slice(index, index + chunks))
  }

  return chunks_arr;
}

/** 
 * Duevuelve la iteración actual que ha de mostrar el carrousel
*/
const updateActualIteration = (iteration, actual) => {

  let x = 0;

  if (iteration !== 0) {
    if ( actual < iteration) {
      x = actual + 1;
    } else {
      x = 0;
    }
  }

  return x;

}