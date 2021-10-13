import { combineReducers } from 'redux';
import { contactReducer, selectedProductReducer, updateContactReducer } from './contactReducer'

const reducers = combineReducers({
    allContacts: contactReducer,
    contact: selectedProductReducer,
    updateContact: updateContactReducer,
})


export default reducers;