import { combineReducers } from 'redux';

// reducers
import clockReducers from './clockReducers';
import deliverynoteReducers from './deliverynoteReducers';
import ordersReducers from './ordersReducers';
import panelReducers from './panelReducers';
import notesReducers from './notesReducers';


// Al combinar los Reducers  los exportamos con el nombre que tendrán finalmente como State

export default combineReducers({

    clock: clockReducers,
    deliveryNote: deliverynoteReducers,
    orders: ordersReducers,
    panel: panelReducers,
    notes: notesReducers
})
