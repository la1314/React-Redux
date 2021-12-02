import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

//Instancia del storage en el se cargan los reducers
//El compose permite la ejecución de middleware dentro del storage
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;

/**
 *  
 * compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
 */
