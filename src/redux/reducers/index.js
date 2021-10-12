import { combineReducers } from 'redux';
import { contactReducer, selectedProductReducer } from './contactReducer'

const reducers = combineReducers({
    allContacts: contactReducer,
    contact: selectedProductReducer,
})


export default reducers;