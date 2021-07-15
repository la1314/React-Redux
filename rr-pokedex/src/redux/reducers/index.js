import { combineReducers } from 'redux';

// reducers
import alertReducers from './alertReducers';
import pokemonsListReducers from './pokemonsListReducers'

export default combineReducers({
  alerts: alertReducers,
  pokemonList: pokemonsListReducers
})
