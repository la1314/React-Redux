import { combineReducers } from 'redux';

// reducers
import alertReducers from './alertReducers';
import pokemonsListReducers from './pokemonsListReducers'

// Al combinar los Reducers  los expornamos con el nombre que tendrán finalmente como State

export default combineReducers({
  alerts: alertReducers,
  pokemonList: pokemonsListReducers
})
