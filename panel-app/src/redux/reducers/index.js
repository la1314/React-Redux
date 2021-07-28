import { combineReducers } from 'redux';

// reducers
import clockReducers from './clockReducers';
import deliverynoteReducers from './deliverynoteReducers';
import pendingReducers from './pendingReducers';


// Al combinar los Reducers  los exportamos con el nombre que tendrán finalmente como State

export default combineReducers({

    clock: clockReducers,
    deliveryNote: deliverynoteReducers,
    pending: pendingReducers
})
