import { ActionTypes } from '../constants/action-types'


const initialState = {
    contacts: [],
}

export const contactReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_CONTACTS:
            return { ...state, contacts: payload };
        default:
            return state;

    }
}


export const selectedProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CONTACT:
            return payload
        default:
            return state;
    }
}

export const updateContactReducer = (state = initialState, { type, payload }) => {
    console.log("updateContactReducer", payload)
    switch (type) {
        case ActionTypes.UPDATE_CONTACT:
            return payload
        default:
            return state;
    }
}